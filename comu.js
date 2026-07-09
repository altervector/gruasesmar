/* ============================================================
   COMU.JS — Grúas Esmar
   Es carrega a TOTES les pàgines. Conté el que es repeteix:
   franja superior, navbar, franja de stats (24h/365d), contacte,
   footer, efecte de scroll del navbar, i el modal informatiu.
   Cada pàgina, a més d'aquest, carrega el seu propi JS (main.js,
   turismos.js...) que només pinta el #hero i el #seccions propis.
   ============================================================ */

(function() {

    const inicialitzar = async () => {

        /* ── 0. FRANJA SUPERIOR ────────────────────────────── */
        const franja = document.getElementById('franja-superior');
        if (franja) {
            franja.innerHTML = `
                <div class="franja-superior">
                    <a href="tel:${CONFIG.TELEFON}">${CONFIG.TL} ${CONFIG.TELEFON}</a>
                    <a href="mailto:${CONFIG.EMAIL}">${CONFIG.EM} ${CONFIG.EMAIL}</a>
                </div>
            `;
        }

        /* ── 1. NAVBAR ─────────────────────────────────────── */
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.innerHTML = `
                <nav class="navbar">
                    <div class="navbar-logo">
                        <img src="${CONFIG.ASSETS}${CONFIG.LOGO_T}" alt="${CONFIG.NOM}">
                    </div>
                    <button class="navbar-hamburguesa">☰</button>
                    <ul class="navbar-menu">
                        <li><a href="#qui-som">${CONFIG.NAV_NOS}</a></li>
                        <li><a href="#serveis">${CONFIG.NAV_SER}</a></li>
                        <li><a href="#contacte">${CONFIG.NAV_CON}</a></li>
                    </ul>
                </nav>
            `;
        }

        const btnHamburguesa = document.querySelector('.navbar-hamburguesa');
        const menu = document.querySelector('.navbar-menu');
        btnHamburguesa.addEventListener('click', () => menu.classList.toggle('obert'));
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => menu.classList.remove('obert'));
        });

        /* ── 2. FRANJA STATS (24h / 365 dies) ─────────────────
           Comuna a totes les pàgines, es pinta abans del footer.
           ════════════════════════════════════════════════════ */
        const stats = document.getElementById('franja-stats');
        if (stats) {
            stats.innerHTML = `
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
            `;
        }

        /* ── 3. CONTACTE ───────────────────────────────────── */
        const contacte = document.getElementById('contacte');
        if (contacte) {
            contacte.innerHTML = `
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

                    <!-- FORMULARI CONTACTE — amagat per ara, pendent decidir -->
                    <!--
                    <form class="form-contacte" id="form-contacte">
                        <input type="text" name="nom" placeholder="Nombre" required>
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="tel" name="telefon" placeholder="Teléfono">
                        <textarea name="missatge" placeholder="Mensaje" required></textarea>
                        <button type="submit" class="hero-boto-principal btn-balla">Enviar</button>
                    </form>
                    -->

                    <a href="${CONFIG.WHATSAPP}" target="_blank" class="boto-whatsapp btn-balla">${CONFIG.WHATSAPPLBL}</a>
                </section>
            `;
        }

        /* ── 4. FOOTER ─────────────────────────────────────── */
        const footer = document.getElementById('footer');
        if (footer) {
            footer.innerHTML = `
                <footer class="footer">
                    <p class="footer-nom">${CONFIG.NOM}</p>
                    <p class="footer-slogan">${CONFIG.SLOGAN}</p>
                    <div class="footer-xarxes">
                        <a href="${CONFIG.INSTAGRAM}" target="_blank">
                            <img src="${CONFIG.ASSETS}icon/Icoinsta.png" alt="Instagram" class="icona-app"> Instagram
                        </a>
                    </div>
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

        /* ── 5. NAVBAR SCROLL ──────────────────────────────── */
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        });

        /* ── 6. MODAL INFO (Qui som / Flota / Instal·lacions) ─ */
        if (!document.getElementById('modal-info')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="modal-info" style="display:none; position:fixed; top:0; left:0;
                    width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999;
                    align-items:center; justify-content:center; padding:20px;">
                    <div style="background:#fff; max-width:500px; width:100%; padding:35px;
                        border-radius:8px; position:relative;">
                        <button onclick="document.getElementById('modal-info').style.display='none'"
                            style="position:absolute; top:10px; right:14px; background:none;
                            border:none; font-size:20px; cursor:pointer;">✕</button>
                        <h3 id="modal-info-titol" style="color:var(--vermell); margin-bottom:14px;"></h3>
                        <p id="modal-info-text" style="line-height:1.7; color:var(--gris-fosc);"></p>
                    </div>
                </div>
            `);
        }

        window.obrirModalInfo = (tipus) => {
            const dades = {
                quisom:       { titol: CONFIG.QUI_SOM_TIT,  text: CONFIG.QUI_DESC },
                flota:        { titol: CONFIG.FLOTA_TIT,    text: CONFIG.FLOTA_DESC },
                instalacions: { titol: CONFIG.INSTAL_TIT,   text: CONFIG.INSTAL_DESC },
            };
            document.getElementById('modal-info-titol').textContent = dades[tipus].titol;
            document.getElementById('modal-info-text').textContent  = dades[tipus].text;
            document.getElementById('modal-info').style.display = 'flex';
        };

    }; // fi inicialitzar

    if (document.readyState === "complete" || document.readyState === "interactive") {
        inicialitzar();
    } else {
        document.addEventListener("DOMContentLoaded", inicialitzar);
    }

})();