/* ============================================================
   CONFIG-SERVEI.JS — Grúas Esmar
   Mapa de serveis per a la pàgina genèrica servicio.html
   Depèn de: res (és pur objecte de dades)

   QUÈ FA AQUEST FITXER:
   servicio.html?s=coches necessita saber quin .js carregar
   i quin tag <xxx-content> pintar. Aquest mapa ho centralitza.

   PER AFEGIR UN SERVEI NOU:
   1. Crear el fitxer NOM-content.js (còpia de coches-content.js)
   2. Afegir una línia aquí sota amb el mateix NOM
   Prou — servicio-loader.js ja el troba sol.
   ============================================================ */

const SERVEIS_MAP = {
    coches:      { js: "content/coches-content.js",      tag: "coches-content"      },
    motos:       { js: "content/motos-content.js",       tag: "motos-content"       },
    pesados:     { js: "content/pesados-content.js",     tag: "pesados-content"     },
    baterias:    { js: "content/baterias-content.js",    tag: "baterias-content"    },
    neumaticos:  { js: "content/neumaticos-content.js",  tag: "neumaticos-content"  },
    itv:         { js: "content/itv-content.js",         tag: "itv-content"         },
        conocenos:      { js: "content/conocenos-content.js",      tag: "conocenos-content"      },
        flota:          { js: "content/flota-content.js",          tag: "flota-content"          },
        instalaciones:  { js: "content/instalaciones-content.js",  tag: "instalaciones-content"  },
};
