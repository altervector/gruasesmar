/* ============================================================
   COCHES-CONTENT.JS — Grúas Esmar
   Web Component: <coches-content></coches-content>
   Contingut únic de coches.html: hero + checklist + text.
   Per fer motos.html, es copia aquest fitxer i es canvia
   el contingut de dins (nom de classe i tag diferents).
   ============================================================ */

class PneumaticosContent extends HTMLElement {
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
                <img class="hero-imatge" src="${CONFIG.ASSETS}images/gruasesmar/servi/pneumaticos/hero-pneumaticos.jpg" alt="Pesados">
                <div class="hero-overlay"></div>
                <div class="hero-contingut">
                    <h1 class="hero-titol">REPARACIÓN DE NEUMÁTICOS IN SITU</h1>
                    <p class="hero-slogan">Cubrimos todo el Vallés Occidental, las 24 horas 365 días</p>
                    <a href="tel:${CONFIG.TELEFON}" class="hero-boto-principal btn-balla">Contacta con nosotros</a>
                </div>
            </section>

            <section class="seccio" id="detall-servei">
                

                <div class="galeria-turismos">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/pneumaticos/pneumaticos-1.jpg" alt="Traslado de turismo">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/pneumaticos/pneumaticos-2.jpg" alt="Grúa asistiendo turismo">
                </div>

                <h2 class="seccio-titol" style="margin-top:40px;">Nos desplazamos y le reparamos el neumático allá donde esté su vehículo</h2>
                <div class="seccio-text">
                    <p>FALTA TEXTO</p>
                </div>
            </section>
        `;
    }
}
customElements.define('pneumaticos-content', PneumaticosContentneumaticos);
