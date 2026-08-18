/* ============================================================
   BOTECO SÃO JORGE — App JS
   Carrinho (localStorage), checkout, integração WhatsApp,
   menu mobile, e hooks de GA4 (placeholders).
   ============================================================ */

/* ---------- GA4 placeholder ----------
   Substitua G-XXXXXXXXXX no <head> de cada página pelo seu ID real
   do Google Analytics 4. As chamadas abaixo já disparam os eventos
   recomendados (ver README.md, seção "Google Analytics"). */
function trackEvent(name, params = {}) {
  if (typeof gtag === "function") gtag("event", name, params);
}

/* ---------- Estado do carrinho ---------- */
const CART_KEY = "bsj_cart";

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(item, qty = 1, obs = "") {
  const cart = getCart();
  const existing = cart.find(c => c.id === item.id && c.obs === obs);
  if (existing) existing.qty += qty;
  else cart.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty, obs });
  saveCart(cart);
  trackEvent("add_to_cart", { item_id: item.id, item_name: item.name, value: item.price, quantity: qty });
  openCart();
}
function removeFromCart(id, obs) {
  let cart = getCart().filter(c => !(c.id === id && c.obs === obs));
  saveCart(cart);
  trackEvent("remove_from_cart", { item_id: id });
  renderCart();
}
function changeQty(id, obs, delta) {
  const cart = getCart();
  const item = cart.find(c => c.id === id && c.obs === obs);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id, obs);
  saveCart(cart);
  renderCart();
}
function cartSubtotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}
function updateCartBadge() {
  document.querySelectorAll(".cart-count").forEach(el => {
    const n = getCart().reduce((s, i) => s + i.qty, 0);
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

/* ---------- Cart drawer UI ---------- */
function openCart() {
  document.getElementById("cartOverlay")?.classList.add("open");
  document.getElementById("cartDrawer")?.classList.add("open");
  renderCart();
}
function closeCart() {
  document.getElementById("cartOverlay")?.classList.remove("open");
  document.getElementById("cartDrawer")?.classList.remove("open");
}
function renderCart() {
  const wrap = document.getElementById("cartItems");
  if (!wrap) return;
  const cart = getCart();
  if (cart.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.<br>Bora ver o <a href="cardapio.html" style="color:var(--gold)">cardápio</a>?</div>`;
  } else {
    wrap.innerHTML = cart.map(i => `
      <div class="cart-item">
        <img src="images/dishes/${i.img}" alt="${i.name}" onerror="this.onerror=null;this.src='images/logo-sao-jorge.jpg'">
        <div class="cart-item-info">
          <h4>${i.name}</h4>
          ${i.obs ? `<div class="obs">Obs: ${i.obs}</div>` : ""}
          <div class="qty-control">
            <button onclick="changeQty('${i.id}', \`${i.obs.replace(/`/g, "")}\`, -1)" aria-label="Diminuir quantidade">−</button>
            <span>${i.qty}</span>
            <button onclick="changeQty('${i.id}', \`${i.obs.replace(/`/g, "")}\`, 1)" aria-label="Aumentar quantidade">+</button>
            <span style="margin-left:auto" class="price" style="font-size:14px">R$ ${(i.price * i.qty).toFixed(2)}</span>
          </div>
        </div>
      </div>`).join("");
  }
  const subtotal = cartSubtotal();
  const feeEl = document.getElementById("cartFee");
  const subEl = document.getElementById("cartSubtotal");
  const totEl = document.getElementById("cartTotal");
  if (subEl) subEl.textContent = `R$ ${subtotal.toFixed(2)}`;
  if (totEl) totEl.textContent = `R$ ${subtotal.toFixed(2)}`;
  const checkoutBtn = document.getElementById("goCheckout");
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

/* ---------- Checkout modal ---------- */
let deliveryType = "retirada";

function openCheckout() {
  if (getCart().length === 0) return;
  closeCart();
  document.getElementById("checkoutModal")?.classList.add("open");
  trackEvent("begin_checkout", { value: cartSubtotal() });
}
function closeCheckout() {
  document.getElementById("checkoutModal")?.classList.remove("open");
}
function selectDelivery(type, el) {
  deliveryType = type;
  document.querySelectorAll(".radio-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  const addressGroup = document.getElementById("addressGroup");
  if (addressGroup) addressGroup.style.display = type === "entrega" ? "block" : "none";
  const feeRow = document.getElementById("cartFeeRow");
  const fee = type === "entrega" ? RESTAURANT.deliveryFee : 0;
  if (feeRow) feeRow.querySelector(".fee-val").textContent = `R$ ${fee.toFixed(2)}`;
}

function validateField(input) {
  const group = input.closest(".form-group");
  if (!group) return true;
  const valid = input.checkValidity() && input.value.trim() !== "";
  group.classList.toggle("field-error", !valid);
  return valid;
}

function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let ok = true;
  inputs.forEach(i => { if (!validateField(i)) ok = false; });
  if (!ok) return;

  const name = form.custName.value.trim();
  const phone = form.custPhone.value.trim();
  const address = deliveryType === "entrega" ? form.custAddress.value.trim() : "";
  const complement = deliveryType === "entrega" ? form.custComplement.value.trim() : "";
  const payment = form.custPayment.value;
  const notes = form.custNotes.value.trim();

  const cart = getCart();
  const fee = deliveryType === "entrega" ? RESTAURANT.deliveryFee : 0;
  const total = cartSubtotal() + fee;

  let msg = `*Novo pedido — ${RESTAURANT.name}*%0A%0A`;
  msg += `*Cliente:* ${name}%0A*Telefone:* ${phone}%0A`;
  msg += `*Tipo:* ${deliveryType === "entrega" ? "Entrega" : "Retirada no local"}%0A`;
  if (address) msg += `*Endereço:* ${address}${complement ? " - " + complement : ""}%0A`;
  msg += `*Pagamento:* ${payment}%0A%0A*Itens:*%0A`;
  cart.forEach(i => {
    msg += `• ${i.qty}x ${i.name} — R$ ${(i.price * i.qty).toFixed(2)}${i.obs ? " (Obs: " + i.obs + ")" : ""}%0A`;
  });
  msg += `%0A*Subtotal:* R$ ${cartSubtotal().toFixed(2)}%0A`;
  if (fee > 0) msg += `*Taxa de entrega:* R$ ${fee.toFixed(2)}%0A`;
  if (notes) msg += `*Observações gerais:* ${notes}%0A`;
  msg += `*Total:* R$ ${total.toFixed(2)}`;

  trackEvent("purchase", { value: total, currency: "BRL" });

  const waUrl = `https://wa.me/${RESTAURANT.whatsapp}?text=${msg}`;
  window.open(waUrl, "_blank");

  document.getElementById("checkoutFormWrap").style.display = "none";
  document.getElementById("checkoutSuccess").style.display = "block";
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

/* ---------- Mobile nav ---------- */
function toggleMobileNav() {
  document.getElementById("mobileNav")?.classList.toggle("open");
}

/* ---------- Generic form validation (contato / reservas) ---------- */
function handleGenericForm(formId, successId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("input[required], textarea[required], select[required]").forEach(i => {
      if (!validateField(i)) ok = false;
    });
    const consent = form.querySelector("#consentCheck");
    if (consent && !consent.checked) {
      ok = false;
      consent.closest(".checkbox-row").style.color = "var(--vinho-bright)";
    }
    if (!ok) return;
    trackEvent("form_submit", { form_id: formId });
    form.style.display = "none";
    document.getElementById(successId).style.display = "block";
  });
}

/* ---------- Open status badge (conversão) ---------- */
function updateOpenStatus() {
  const el = document.getElementById("openStatusBadge");
  if (!el) return;
  const now = new Date();
  const day = now.getDay(); // 0=domingo ... 6=sábado
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpenDay = day >= 2 && day <= 6; // terça(2) a sábado(6)
  const isOpenHour = hour >= 18 || hour < 1; // 18h às 00h (tolerância até 1h)
  const open = isOpenDay && isOpenHour;
  el.textContent = open ? "● Aberto agora" : "○ Fechado agora — abre às 18h";
  el.classList.toggle("status-open", open);
  el.classList.toggle("status-closed", !open);
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  updateOpenStatus();
  updateCartBadge();
  document.getElementById("cartBtn")?.addEventListener("click", openCart);
  document.getElementById("cartOverlay")?.addEventListener("click", closeCart);
  document.getElementById("closeCartBtn")?.addEventListener("click", closeCart);
  document.getElementById("hamburgerBtn")?.addEventListener("click", toggleMobileNav);
  document.getElementById("goCheckout")?.addEventListener("click", openCheckout);
  document.getElementById("closeCheckoutBtn")?.addEventListener("click", closeCheckout);
  document.getElementById("checkoutForm")?.addEventListener("submit", submitOrder);
  handleGenericForm("contactForm", "contactSuccess");
  handleGenericForm("reservaForm", "reservaSuccess");

  document.querySelectorAll("[data-wa-click]").forEach(el => {
    el.addEventListener("click", () => trackEvent("whatsapp_click"));
  });
  document.querySelectorAll("[data-tel-click]").forEach(el => {
    el.addEventListener("click", () => trackEvent("phone_click"));
  });
  document.querySelectorAll("[data-maps-click]").forEach(el => {
    el.addEventListener("click", () => trackEvent("directions_click"));
  });
});
