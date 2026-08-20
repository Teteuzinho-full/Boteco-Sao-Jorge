document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <img src="images/logo-sao-jorge.jpg" alt="Boteco São Jorge">
            <strong>Boteco São Jorge</strong>
          </div>
          <p>Gastrobar tradicional em Blumenau/SC. Chopp sempre gelado, comida de boteco feita na hora e música ao vivo, de terça a sábado.</p>
          <div class="social-row">
            <a href="https://instagram.com/botecosaojorge" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
            <a href="https://facebook.com/botecosaojorge" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
            <a href="https://wa.me/554799999999" target="_blank" rel="noopener" aria-label="WhatsApp" data-wa-click>WA</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Navegação</h4>
          <a href="cardapio.html">Cardápio</a>
          <a href="sobre.html">Sobre nós</a>
          <a href="reservas.html">Reservas</a>
          <a href="blog.html">Novidades</a>
          <a href="contato.html">Contato</a>
        </div>
        <div class="footer-col">
          <h4>Contato</h4>
          <a href="tel:+5547999999999" data-tel-click>(47) 99999-9999</a>
          <p>contato@botecosaojorge.com.br</p>
          <p>Rua Curt Hering, 149, Blumenau, Santa Catarina, 89010-030</p>
        </div>
        <div class="footer-col">
          <h4>Horário</h4>
          <p>Terça a sábado</p>
          <p>A partir das 18h</p>
          <p style="margin-top:14px; font-size:12px;">Ambiente recomendado para maiores de 13 anos, acompanhados.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Boteco São Jorge. Todos os direitos reservados.</span>
        <div style="display:flex; gap:18px;">
          <a href="politica-de-privacidade.html">Política de Privacidade</a>
          <a href="termos-de-uso.html">Termos de Uso</a>
        </div>
      </div>
    </div>
  `;
});
