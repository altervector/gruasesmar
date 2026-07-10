/* ============================================================
   CONOCENOS-CONTENT.JS — Grúas Esmar
   Web Component: <conocenos-content></conocenos-content>
   Mateix esquelet que coches-content.js (hero + seccio),
   adaptat amb blocs imatge+text i llista de política de qualitat.
   ============================================================ */

class ConocenosContent extends HTMLElement {
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
                .bloc-imatge-text {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 24px;
                    align-items: center;
                    margin-bottom: 30px;
                }
                .bloc-imatge-text img {
                    width: 100%;
                    border-radius: var(--radi);
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
                .cita-destacada {
                    border-left: 3px solid var(--vermell);
                    padding: 4px 20px;
                    margin-top: 30px;
                    font-style: italic;
                    color: var(--gris-fosc);
                    font-size: 1.05rem;
                }
                @media (min-width: 768px) {
                    .bloc-imatge-text { grid-template-columns: 1fr 1fr; }
                    .checklist-grid { grid-template-columns: repeat(2, 1fr); }
                }
            </style>


            <section class="hero hero-servei">
                <img class="hero-imatge" src="${CONFIG.ASSETS}images/gruasesmar/servi/conocenos/conocenos.png" alt="Conócenos">
                <div class="hero-overlay"></div>
                <div class="hero-contingut">
                    <h1 class="hero-titol">CONÓCENOS</h1>
                    <p class="hero-slogan">Contamos con más 30 años de experiencia en servicio de asistencia en carretera</p> 
                </div>
            </section>

            <section class="seccio" id="detall-servei">

                <div class="bloc-imatge-text">
                    <img src="${CONFIG.ASSETS}images/gruasesmar/servi/conocenos/conocenos1.jpg" alt="Grúas Esmar">
                    <div>
                        <h2 class="seccio-titol">Nuestra historia</h2>
                        <p class="seccio-text">Los 30 años de experiencia nos han hecho conocer las demandas del mercado actual, y con el tiempo hemos conseguido uno de nuestros principales objetivos; ofrecer un buen servicio a nuestros clientes.</p>
                        <p class="seccio-text">Por eso contamos con un equipo de profesionales especializados en la asistencia en carretera, así como una amplia y variada flota de vehículos completamente renovada.</p>
  

                <p class="seccio-text">Las principales compañías de asistencia en carretera han depositado su confianza en nosotros. Formamos un equipo humano que permite situar nuestra empresa como una de las mejores servicios de grúa y asistencia en carretera de la provincia.</p>
                <p class="seccio-text">La calidad y la colaboración con sus clientes son, desde el mismo instante de su fundación, la base del éxito de Grúas Esmar.</p>
                <h2 class="seccio-titol" style="margin-top:24px;">Y de cara al futuro...</h2>
                <p class="seccio-text">Los responsables de Grúas Esmar apuestan por mantener su política de calidad y servicio al cliente y, al mismo tiempo, hacer frente al mercado con el valor justo de un servicio urgente como el de la asistencia en carretera.</p>

                <p class="seccio-text" style="text-align:center; font-weight:700; font-size:1.15rem; margin-top:30px;">
                    Comprometidos con cada servicio dando la mejor calidad.
                </p>
                  </div>
                </div>
                <h2 class="seccio-titol" style="margin-top:40px;">Política de Calidad</h2>
                <p class="seccio-text">Creemos en una organización enfocada a las necesidades y expectativas de nuestros clientes, con una orientación de la gestión de la empresa hacia los procesos que se llevan a cabo y en la necesidad de mejorar nuestro sistema de gestión de flota de una manera continuada y sistemática, teniendo en cuenta el cumplimiento de los requisitos legales y reglamentarios.</p>

                <div class="checklist-grid">
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Formar a nuestro personal de forma continuada para ofrecer un servicio más eficaz.</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Disponer de material de primer orden en el mercado de este sector.</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Asegurar una actuación que se distinga por la profesionalidad, seguridad y rapidez.</span></div>
                    <div class="checklist-item"><span class="checklist-check">✔</span><span>Ofrecer un buen servicio con una elevada relación calidad-precio.</span></div>
                </div>

                <p class="cita-destacada">
                    Nos gustan los retos y cada día nos gusta más superarnos. No nos damos por vencidos nunca y cueste lo que nos cueste sacamos cada servicio con éxito.
                </p>

            </section>
        `;
    }
}
customElements.define('conocenos-content', ConocenosContent);