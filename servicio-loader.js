/* ============================================================
   SERVICIO-LOADER.JS — Grúas Esmar
   Depèn de: config.js, config-servei.js (han de carregar-se abans)

   QUÈ FA AQUEST FITXER:
   1. Llegeix el paràmetre ?s= de la URL (ex: servicio.html?s=coches)
   2. Busca aquella clau dins SERVEIS_MAP (config-servei.js)
   3. Carrega dinàmicament el .js del servei (coches-content.js...)
   4. Un cop carregat, injecta el tag <coches-content></coches-content>
      dins de #contingut-servei
   Si la clau no existeix o no hi ha ?s= → mostra avís d'error.
   ============================================================ */

(function() {

    // ─── 1. LLEGIR EL PARÀMETRE ?s= DE LA URL ────────────────
    // URLSearchParams → objecte natiu del navegador per llegir querystring
    // Equivalent VB6: llegir Request.QueryString("s")
    const params  = new URLSearchParams(window.location.search);
    const clauServei = params.get('s'); // "coches", "motos"... o null si no hi és

    const contenidor = document.getElementById('contingut-servei');
    if (!contenidor) return; // si l'HTML no té el div, no fem res

    // ─── 2. BUSCAR EL SERVEI AL MAPA ──────────────────────────
    const servei = clauServei ? SERVEIS_MAP[clauServei] : null;

    // Si no hi ha clau vàlida → avís simple i sortim
    if (!servei) {
        contenidor.innerHTML = `
            <div style="padding:80px 24px; text-align:center;">
                <p class="seccio-text">Servicio no encontrado.</p>
                <a href="index.html" class="hero-boto-principal" style="display:inline-block; margin-top:16px;">Volver al inicio</a>
            </div>
        `;
        return;
    }

    // ─── 3. CARREGAR EL SCRIPT DEL SERVEI (dinàmicament) ─────
    // Mateix patró anti-caché que loader.js (?v=timestamp)
    const now = new Date().getTime();
    const s = document.createElement('script');
    s.src = CONFIG.BASE_URL + servei.js + '?v=' + now;

    // ─── 4. QUAN EL SCRIPT ACABI DE CARREGAR → PINTAR EL TAG ─
    // onload → s'executa just quan el navegador ha llegit i
    // executat el fitxer (el customElements.define ja ha corregut)
    s.onload = () => {
        contenidor.innerHTML = `<${servei.tag}></${servei.tag}>`;
    };

    document.head.appendChild(s);

})();
