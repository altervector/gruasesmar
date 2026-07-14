/* ============================================================
   FOOTER-COMU.JS — Grúas Esmar
   Web Component: <footer-comu></footer-comu>
   Franja 24h/365 dies + secció contacte + footer.
   Igual a totes les pàgines, es crida amb una sola etiqueta.
   ============================================================ */

class FooterComu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="franja-stats" style="background-image:url('${CONFIG.ASSETS}${CONFIG.STATS_IMG}');">
                <div class="franja-stats-overlay"></div>
                <div class="stat-item">
                    <div class="stat-numero">24</div>
                    <div class="stat-label">horas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-numero">365</div>
                    <div class="stat-label">días/año</div>
                </div>
                <a href="tel:${CONFIG.TELEFON}" class="stats-boto">${CONFIG.STATS_BOTO}</a>
            </div>

            <section class="seccio" id="contacte">
                <p class="seccio-eyebrow">${CONFIG.ON_SOM}</p>
                <h2 class="seccio-titol">${CONFIG.ON_SOM_TIT}</h2>
                <div class="contacte-grid">
                    <div class="contacte-item">
                        <div class="contacte-ico">${CONFIG.AD}</div>
                        <div>
                            <div class="contacte-label">${CONFIG.ADRECALBL}</div>
                            <div class="contacte-valor"><a href="${CONFIG.URL_MAPS}" target="_blank">${CONFIG.ADRECA}</a></div>
                        </div>
                    </div>
                    <div class="contacte-item">
                        <div class="contacte-ico">${CONFIG.TL}</div>
                        <div>
                            <div class="contacte-label">${CONFIG.TELEFONLBL}</div>
                            <div class="contacte-valor">
                                <a href="tel:${CONFIG.TELEFON}">${CONFIG.TELEFON}</a><br>
                                <a href="tel:${CONFIG.MOBIL}">${CONFIG.MOBIL}</a>
                            </div>
                        </div>
                    </div>
                    <div class="contacte-item">
                        <div class="contacte-ico">${CONFIG.EM}</div>
                        <div>
                            <div class="contacte-label">${CONFIG.EMAILLBL}</div>
                            <div class="contacte-valor"><a href="mailto:${CONFIG.EMAIL}">${CONFIG.EMAIL}</a></div>
                        </div>
                    </div>
                    <div class="contacte-item">
                        <div class="contacte-ico">${CONFIG.HR}</div>
                        <div>
                            <div class="contacte-label">${CONFIG.HORA_0}</div>
                            <div class="contacte-valor">${CONFIG.HORA_1}</div>
                        </div>
                    </div>
                </div>
                <a href="${CONFIG.WHATSAPP}" target="_blank" class="boto-whatsapp btn-balla">${CONFIG.WHATSAPPLBL}</a>
            </section>

            <footer class="footer">
                <p class="footer-nom">${CONFIG.NOM}</p>
                <p class="footer-slogan">${CONFIG.SLOGAN}</p>
                <div class="footer-xarxes">
                    <a href="${CONFIG.INSTAGRAM}" target="_blank">
                        <img src="${CONFIG.ASSETS}icon/Icoinsta.png" alt="Instagram" class="icona-app"> Instagram
                    </a>
                    <a href="${CONFIG.URL_RESSENYES}}" target="_blank">
                        <img src="${CONFIG.ASSETS}icon/google.png" alt="Google" class="icona-app">Google
                    </a>
                </div>
                            <p class="footer-qr">
                                <a href="${CONFIG.ASSETS}${CONFIG.QR}">
                                    <img src="${CONFIG.ASSETS}${CONFIG.QR}" alt="QR">
                                </a>
                            </p>
                <p style="font-size:13px; color: var(--gris);">
                    <a href="${CONFIG.URL_MAPS}" target="_blank">${CONFIG.ADRECA}</a>
                </p>
                <div class="footer-legal">
                    <a href="privacitat.html">Política de privacidad</a>
                    <a href="cookies.html">Uso de Cookies</a>
                </div>
                <p class="footer-poweredby">
                    Powered by <a href="https://www.altervector.com" target="_blank">AlterVector</a>
                </p>
            </footer>
        `;
    }
}
customElements.define('footer-comu', FooterComu);
