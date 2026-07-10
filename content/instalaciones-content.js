/* ============================================================
   INSTALACIONES-CONTENT.JS — Grúas Esmar
   Web Component: <instalaciones-content></instalaciones-content>
   Mateix esquelet que coches-content.js (hero + seccio),
   amb galeria d'imatges de les instal·lacions.
   ============================================================ */

class InstalacionesContent extends HTMLElement {
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
                .instal-imatge-principal {
                    width: 100%;
                    border-radius: var(--radi);
                    margin: 24px 0;
                }
                .instal-galeria {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 14px;
                    margin-top: 20px;
                }
                .instal-galeria img {
                    width: 100%;
                    border-radius: var(--radi);
                }
                @media (min-width: 768px) {
                    .instal-galeria { grid-template-columns: 1fr 1fr; }
                }
            </style>


            <section class="hero hero-servei">
                <img class="hero-imatge" src="${CONFIG.ASSETS}images/gruasesmar/servi/instalaciones/hero-insta.jpg" alt="Instalaciones Grúas Esmar">
                <div class="hero-overlay"></div>
                <div class="hero-contingut">
                    <h1 class="hero-titol">INSTALACIONES</h1>
                    <p class="hero-slogan">800m² en donde garantizamos la máxima tranquilidad, dando confianza a nuestros clientes</p>
                </div>
            </section>

            <section class="seccio" id="detall-servei">

                <h2 class="seccio-titol">La seguridad es nuestro principal compromiso</h2>
                <p class="seccio-text">Cubiertos, destinados a la custodia de vehículos, con alarma conectada las 24h a una central con aviso a la Policía. Nuestras instalaciones están dotadas de la tecnología más avanzada en sistemas de video vigilancia, a través de un circuito cerrado de CCTV.</p>
                <p class="seccio-text">Disponemos de zona de taller para el mantenimiento de nuestra flota, oficinas y sala de espera para nuestros clientes.</p>
                <p class="seccio-text">Estamos en <b>${CONFIG.ADRECA}</b></p>

                <img class="instal-imatge-principal" src="${CONFIG.ASSETS}images/gruasesmar/servi/instalaciones/hero-insta.jpg" alt="Instalaciones Grúas Esmar">

                <div class="instal-galeria">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/instalaciones/insta-1.jpg" alt="Instalaciones Grúas Esmar">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/instalaciones/insta-2.jpg" alt="Instalaciones Grúas Esmar">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/instalaciones/insta-3.jpg" alt="Instalaciones Grúas Esmar">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/instalaciones/insta-4.jpg" alt="Instalaciones Grúas Esmar">
                </div>

            </section>


        `;
    }
}
customElements.define('instalaciones-content', InstalacionesContent);