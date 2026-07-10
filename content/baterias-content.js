/* ============================================================
   COCHES-CONTENT.JS — Grúas Esmar
   Web Component: <coches-content></coches-content>
   Contingut únic de coches.html: hero + checklist + text.
   Per fer motos.html, es copia aquest fitxer i es canvia
   el contingut de dins (nom de classe i tag diferents).
   ============================================================ */

class BateriasContent extends HTMLElement {
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
                <img class="hero-imatge" src="${CONFIG.ASSETS}images/gruasesmar/servi/baterias/baterias-2.png" alt="Pesados">
                <div class="hero-overlay"></div>
                <div class="hero-contingut">
                    <h1 class="hero-titol">CAMBIO DE BATERÍAS A DOMICILIO</h1>
                    <p class="hero-slogan">Cubrimos todo el Vallés Occidental, las 24 horas 365 días</p>
                    <a href="tel:${CONFIG.TELEFON}" class="hero-boto-principal btn-balla">Contacta con nosotros</a>
                </div>
            </section>

            <section class="seccio" id="detall-servei">
                <h2 class="seccio-titol">Nos desplazamos y le cambiamos la batería allá donde esté su vehículo</h2>
                <p class="seccio-text">En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. </p>
                <div class="checklist-grid">
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Bateria para Turismos</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Bateria para Camiones</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Bateria para Caravanas</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Bateria para Motocicletas</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Bateria para Autocaravanas</span></div>
                </div>

                <div class="galeria-turismos">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/baterias/baterias-1.png" alt="Traslado de turismo">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/baterias/baterias-2.png" alt="Grúa asistiendo turismo">
                </div>

                <h2 class="seccio-titol" style="margin-top:40px;">Cómo cambiar la batería del coche, moto o camión</h2>
                <div class="seccio-text">
                    <p>En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. </p>
                </div>
            </section>
        `;
    }
}
customElements.define('baterias-content', BateriasContent);
