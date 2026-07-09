/* ============================================================
   COCHES-CONTENT.JS — Grúas Esmar
   Web Component: <coches-content></coches-content>
   Contingut únic de coches.html: hero + checklist + text.
   Per fer motos.html, es copia aquest fitxer i es canvia
   el contingut de dins (nom de classe i tag diferents).
   ============================================================ */

class CochesContent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

            <style>
                .hero-servei {
                    min-height: 340px;
                    height: 60vh;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                }
                .hero-servei .hero-contingut {
                    max-width: 600px;
                    margin-top: 100px;
                }
                    .hero-servei .hero-titol {
                    font-size: 1.5rem;
                }
                .hero-servei .hero-overlay {
                    background: rgba(33, 102, 204, 0.61);
                }
                .checklist-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 14px;
                    margin-top: 20px;
                }
                .checklist-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 600;
                    color: var(--gris-fosc);
                }
                .checklist-check {
                    color: var(--vermell);
                    font-weight: 800;
                }
                .galeria-turismos {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                    margin-top: 30px;
                }
                .galeria-turismos img {
                    width: 100%;
                    border-radius: var(--radi);
                }
                @media (min-width: 768px) {
                    .galeria-turismos { grid-template-columns: 1fr 1fr; }
                }
                @media (min-width: 768px) {
                    .checklist-grid { grid-template-columns: repeat(3, 1fr); }
                }
            </style>


            <section class="hero hero-servei">
                <img class="hero-imatge" src="${CONFIG.ASSETS}images/gruasesmar/servi/turismos/hero-turismos.jpg" alt="Turismos">
                <div class="hero-overlay"></div>
                <div class="hero-contingut">
                    <h1 class="hero-titol">ASISTENCIA EN CARRETERA PARA TODA CLASE DE MOTOCILCLETAS</h1>
                    <p class="hero-slogan">Cubrimos todo el Vallés Occidental, las 24 horas 365 días</p>
                    <a href="tel:${CONFIG.TELEFON}" class="hero-boto-principal btn-balla">${CONFIG.HERO_BOTO_PRI} ahora</a>
                </div>
            </section>

            <section class="seccio" id="detall-servei">
                <h2 class="seccio-titol">Asistencia en carretera para tu moto</h2>
                <p class="seccio-text">Disponemos de una renovada y diversa flota de vehículos equipados para poder atender todo tipo de incidencias.</p>
                
                <div class="checklist-grid">
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Turismos</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Furgonetas</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Caravanas</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Motocicletas</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Autocaravanas</span></div>
                </div>

                <div class="galeria-turismos">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/turismos/turismos-1.jpg" alt="Traslado de turismo">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/turismos/turismos-2.jpg" alt="Grúa asistiendo turismo">
                </div>

                <h2 class="seccio-titol" style="margin-top:40px;">Pasos básicos a seguir cuando esperamos asistencia en carretera</h2>
                <div class="seccio-text">
                    <p>Uno de los <b>peores momentos</b> que nos pueden ocurrir en la carretera és <b>quedarnos tirados en cualquier vía</b> con circulación constante.</p>
                    <p>Si contactas con nosotros, podremos asistir a tu vehículo y lo llevaremos al destino que nos indiques.</p>
                    <p>Para que la asistencia funcione correctamente és importante facilitar toda la información posible sobre tu ubicación, qué avería ha ocurrido y qué tipo de vehículo tenemos que asistir.</p>
                    <p>Mantente atento a la carretera para <b>poder trazar el punto en el que te encuentras</b> si tu vehículo no incluye localización por GPS.</p>
                    <p>Utiliza el <b>servicio de GPS de tu propio teléfono móvil</b> para saber el punto exacto en el que estás parado.</p>
                </div>
            </section>
        `;
    }
}
customElements.define('coches-content', CochesContent);
