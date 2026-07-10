/* ============================================================
   MAIN.JS — Grúas Esmar (índex)
   Es carrega NOMÉS a index.html, després de comu.js.
   Pinta el hero i les seccions pròpies de l'índex:
   serveis, qui-som, mini-hero aseguradores.
   ============================================================ */

(function() {

    const inicialitzar = async () => {

        /* ── HERO ──────────────────────────────────────────── */
        const hero = document.getElementById('hero');
        if (hero) {
            hero.innerHTML = `
                <section class="hero">
                    <img class="hero-imatge" src="${CONFIG.ASSETS}${CONFIG.BLOC_HERO}" alt="${CONFIG.NOM}">
                    <div class="hero-overlay"></div>
                    <div class="hero-contingut">
                        <span class="hero-eyebrow">Asistencia 24h</span>
                        <h1 class="hero-titol">${CONFIG.NOM}</h1>
                        <p class="hero-slogan">${CONFIG.SLOGAN}</p>
                        <div class="hero-botons">
                            <a href="tel:${CONFIG.TELEFON}" class="hero-boto-principal btn-balla">${CONFIG.HERO_BOTO_PRI}</a>
                            <a href="#serveis" class="hero-boto-secundari">${CONFIG.HERO_BOTO_SEC}</a>
                        </div>
                    </div>
                </section>
            `;
        }

        /* ── SECCIONS ──────────────────────────────────────── */
        const seccions = document.getElementById('seccions');
        if (seccions) {
            seccions.innerHTML = `

                <!-- SERVEIS — dos blocs, com a l'original -->
                <section class="seccio seccio-serveis" id="serveis" style="background-image:url('${CONFIG.ASSETS}${CONFIG.FONS_SERVEIS}');">
                    <h2 class="seccio-titol">Asistencia en Carretera 24h 365 días</h2>
                    <p class="seccio-text">Realizamos servicio en todo el Vallés Occidental y traslado de vehículos a toda Cataluña.</p>
                    <div class="serveis-grid">
                        ${CONFIG.ASSIST_CARRETERA.map(s => `
                            <div class="servei-card" style="background-image:url('${CONFIG.ASSETS}${s.img}'); background-size:cover; background-position:center;">
                                <div class="servei-titol">${s.titol}</div>
                                <div class="servei-desc">${s.desc}</div>
                                <a href="${s.url}" class="servei-link">Leer más</a>
                            </div>
                        `).join('')}
                    </div>

                    <h2 class="seccio-titol" style="margin-top:40px;">Otros servicios de Gruas Esmar</h2>
                    <p class="seccio-text">Especialistas en reparación in situ, economizando tiempo, trabajo y riesgos.</p>
                    <div class="serveis-grid">
                        ${CONFIG.ALTRES_SERVEIS.map(s => `
                            <div class="servei-card" style="background-image:url('${CONFIG.ASSETS}${s.img}'); background-size:cover; background-position:center;">
                                <div class="servei-titol">${s.titol}</div>
                                <div class="servei-desc">${s.desc}</div>
                                <a href="${s.url}" class="servei-link">Leer más</a>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <hr class="separador">

                <!-- CONEIX-NOS — 3 targetes que obren modal amb detall -->
                <section class="seccio" id="qui-som">
                    <p class="seccio-eyebrow">${CONFIG.QUI_SOM}</p>
                    <h2 class="seccio-titol">Conócenos</h2>
<div class="serveis-grid">
    <div class="servei-card" style="background-image:url('${CONFIG.ASSETS}${CONFIG.QUI_SOM_IMG}'); background-size:cover; background-position:center;">
        <div class="servei-titol">${CONFIG.QUI_SOM_TIT}</div>
        <div class="servei-desc">${CONFIG.QUI_DESC.slice(0,90)}...</div>
        <a href="servicio.html?s=conocenos" class="servei-link">Leer más</a>
    </div>
    <div class="servei-card" style="background-image:url('${CONFIG.ASSETS}${CONFIG.FLOTA_IMG}'); background-size:cover; background-position:center;">
        <div class="servei-titol">${CONFIG.FLOTA_TIT}</div>
        <div class="servei-desc">${CONFIG.FLOTA_DESC.slice(0,90)}...</div>
        <a href="servicio.html?s=flota" class="servei-link">Leer más</a>
    </div>
    <div class="servei-card" style="background-image:url('${CONFIG.ASSETS}${CONFIG.INSTAL_IMG}'); background-size:cover; background-position:center;">
        <div class="servei-titol">${CONFIG.INSTAL_TIT}</div>
        <div class="servei-desc">${CONFIG.INSTAL_DESC.slice(0,90)}...</div>
        <a href="servicio.html?s=instalaciones" class="servei-link">Leer más</a>
    </div>
</div>
                </section>

                <div class="mini-hero" style="background-image:url('${CONFIG.ASSETS}${CONFIG.ASSEG_IMG}');">
                    <div class="mini-hero-overlay"></div>
                    <div class="mini-hero-contingut">
                        <h2 class="mini-hero-titol">${CONFIG.ASSEG_TIT}</h2>
                        <p class="mini-hero-desc">${CONFIG.ASSEG_DESC}</p>
                        <a href="#contacte" class="mini-hero-boto">${CONFIG.ASSEG_BOTO}</a>
                    </div>
                </div>

            `;
        }

    }; // fi inicialitzar

    if (document.readyState === "complete" || document.readyState === "interactive") {
        inicialitzar();
    } else {
        document.addEventListener("DOMContentLoaded", inicialitzar);
    }

})();