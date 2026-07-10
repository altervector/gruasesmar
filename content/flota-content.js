/* ============================================================
   FLOTA-CONTENT.JS — Grúas Esmar
   Web Component: <flota-content></flota-content>
   Mateix esquelet que coches-content.js (hero + seccio),
   amb una llista de vehicles (imatge + títol + text).

   NOTA: Iveco Eurocargo, DAF LF (2a unitat) i Isuzu Dmax
   a l'original tenien text de mostra (lorem ipsum) —
   aquí hi ha un text genèric provisional, pendent que
   la clienta doni el text definitiu de cada vehicle.
   ============================================================ */

class FlotaContent extends HTMLElement {
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
                .flota-imatge-principal {
                    width: 100%;
                    border-radius: var(--radi);
                    margin: 20px 0 10px 0;
                }
                .vehicle-item {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 16px;
                    align-items: center;
                    margin-top: 30px;
                    padding-top: 30px;
                    border-top: 1px solid rgba(0,0,0,0.07);
                }
                .vehicle-item img {
                    width: 100%;
                    border-radius: var(--radi);
                }
                .vehicle-titol {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: var(--gris-fosc);
                    margin-bottom: 8px;
                }
                .vehicle-tags {
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: var(--vermell);
                    text-transform: uppercase;
                    margin-bottom: 6px;
                }
                @media (min-width: 768px) {
                    .vehicle-item { grid-template-columns: 1fr 2fr; }
                }
            </style>


            <section class="hero hero-servei">
                <img class="hero-imatge" src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/hero-flota.jpg" alt="Flota Grúas Esmar">
                <div class="hero-overlay"></div>
                <div class="hero-contingut">
                    <h1 class="hero-titol">NUESTRA FLOTA</h1>
                    <p class="hero-slogan">CONTAMOS CON UNA AMPLIA FLOTA DE GRÚAS PREPARADAS PARA CUBRIR TODAS LAS NECESIDADES</p> 
                </div>
            </section>

            <section class="seccio" id="detall-servei">
                <h2>Conozca nuestra flota</h2>
                <p class="seccio-text">Creemos en una organización enfocada a las necesidades y expectativas de nuestros clientes, en una orientación de la gestión de la empresa hacia los procesos que se llevan a cabo y en la necesidad de mejorar nuestro sistema de gestión de flota de una manera continuada y sistemática, teniendo en cuenta el cumplimiento de los requisitos legales y reglamentarios.</p>

                <img class="flota-imatge-principal" src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/hero-flota.jpg" alt="Flota de vehículos Grúas Esmar">

                <h2 class="seccio-titol" style="margin-top:30px;">Nuestros vehículos</h2>
                <p class="seccio-text">Disponemos de una amplia y variada flota de vehículos, completamente renovada y equipada para atender cualquier tipo de incidencia en carretera.</p>

                <!-- OPEL CORSA VAN -->
                <div class="vehicle-item">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/flota-1.png" alt="Opel Corsa Van">
                    <div>
                        <div class="vehicle-titol">Opel Corsa Van</div>
                        <p class="seccio-text">Con nuestro Opel Corsa Van realizamos la asistencia en carretera más completa en toda la zona del Vallés Occidental, ofreciendo nuestros servicios allá donde estés.</p>
                        <div class="vehicle-tags">Turismos · Motocicletas · Autocaravanas</div>
                        <p class="seccio-text">Asistencia en carretera 24 horas los 365 días al año para toda clase de turismos, motocicletas y autocaravanas.</p>
                    </div>
                </div>

                <!-- DAF LF -->
                <div class="vehicle-item">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/flota-2.jpg" alt="DAF LF">
                    <div>
                        <div class="vehicle-titol">DAF LF</div>
                        <p class="seccio-text">Con nuestras grúas DAF LF realizamos la asistencia en carretera más completa en toda la zona del Vallés Occidental, ofreciendo nuestros servicios allá donde estés.</p>
                        <div class="vehicle-tags">Turismos · Motocicletas · Furgonetas · Autocaravanas · Caravanas · Camiones ligeros</div>
                        <p class="seccio-text">Servicio de grúa para toda clase de vehículos. Asistencia en carretera 24 horas los 365 días al año.</p>
                    </div>
                </div>

                <!-- IVECO EUROCARGO — text pendent de la clienta -->
                <div class="vehicle-item">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/flota-3.jpg" alt="Iveco Eurocargo">
                    <div>
                        <div class="vehicle-titol">Iveco Eurocargo</div>
                        <p class="seccio-text">Vehículo de nuestra flota preparado para dar servicio de asistencia en carretera en toda la zona del Vallés Occidental.</p>
                        <div class="vehicle-tags">Turismos · Motocicletas · Autocaravanas</div>
                    </div>
                </div>

                <!-- DAF LF (2a unitat) — text pendent de la clienta -->
                <div class="vehicle-item">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/flota-4.jpg" alt="DAF LF">
                    <div>
                        <div class="vehicle-titol">DAF LF</div>
                        <p class="seccio-text">Vehículo de nuestra flota preparado para dar servicio de asistencia en carretera en toda la zona del Vallés Occidental.</p>
                        <div class="vehicle-tags">Turismos · Motocicletas · Autocaravanas</div>
                    </div>
                </div>

                <!-- ISUZU DMAX — text pendent de la clienta -->
                <div class="vehicle-item">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/flota/flota-5.jpg" alt="Isuzu Dmax">
                    <div>
                        <div class="vehicle-titol">Isuzu Dmax</div>
                        <p class="seccio-text">Vehículo de nuestra flota preparado para dar servicio de asistencia en carretera en toda la zona del Vallés Occidental.</p>
                        <div class="vehicle-tags">Turismos · Motocicletas · Autocaravanas</div>
                    </div>
                </div>

            </section>
        `;
    }
}
customElements.define('flota-content', FlotaContent);