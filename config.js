/* ============================================================
   CONFIG.JS — Grúas Esmar
   PRIMER ESBORRANY — colors i textos pendents de confirmar
   amb la web original un cop hi tinguem accés complet
   ============================================================ */

const CONFIG = {

    // 1. NEGOCI
    NOM:            "Grúas Esmar",
    LOGO:           "logo/logoEsmar.png",       // ← pendent: recuperar logo real
    LOGO_T:         "logo/logoGEtrans.png",  // ← pendent: recuperar logo real
    SLOGAN:         "Asistencia en carretera 24h en el Vallés Occidental",
    TELEFON:        "93 780 06 81",                 TELEFONLBL: "Teléfono", TL: "📞",
    MOBIL:          "639 758 989",
    WHATSAPP:       "https://wa.me/34639758989",    WHATSAPPLBL: "💬 Escríbenos por WhatsApp",
    EMAIL:          "info@gruasesmar.com",          EMAILLBL: "e-Mail",   EM: "✉️",
    ADRECA:         "Carrer de Colom, 453, Nave D51, 08223 Terrassa, Barcelona",   ADRECALBL: "Dirección", AD: "📍",
    INSTAGRAM:      "https://www.instagram.com/gruas_esmar",
    FACEBOOK:       "",
    EMAIL_SUPORT:   "suport@altervector.com",

    // 2. RUTES
    REPO_URL:       "https://altervector.github.io/gruasesmar/",
    BASE_URL:       "./",
    BASE_WORKER:    "",   // ← pendent: crear Worker per als 2 formularis
    URL_OFICIAL:    "",
    ASSETS:         "https://avsets.pages.dev/",
    URL_MAPS:       "https://www.google.com/maps/search/?api=1&query=Talleres+Esmar+Terrassa",
    URL_RESSENYES:  "https://www.google.com/maps/search/?api=1&query=Talleres+Esmar+Terrassa",

    // 3. IMATGES — pendents de baixar de la web original i pujar a avsets
    BLOC_HERO:      "images/gruasesmar/hero-gruasesmar.jpg",
    FONS_SERVEIS:   "images/gruasesmar/servi/servi.jpg",
    QR:             "qr/qr-gruasesmar.png",                  // ← pendent generar

    // 4. NAVBAR
    NAV_NOS:        "Nosotros",
    NAV_SER:        "Servicios",
    NAV_CON:        "Contacto",

    HERO_BOTO_PRI:  "📞 Pedir grúa",
    HERO_BOTO_SEC:  "Nuestros servicios",

    // 5. QUI SOM (fusió de Conócenos + Aseguradoras, que a l'original es repetien)
    QUI_SOM:        "Quiénes somos...",
    QUI_SOM_TIT:    "Más de 30 años de experiencia en asistencia en carretera",
    QUI_DESC:       "Talleres Esmar, S.L. (Grúas Esmar) es una empresa especializada en asistencia en carretera con más de 30 años de experiencia en el sector. Toda nuestra flota está permanentemente comunicada con nuestra central de operaciones mediante GPS, para responder con rapidez a cualquier solicitud. Trabajamos también con aseguradoras, ofreciendo un servicio profesional adaptado a sus necesidades.",
    QUI_SOM_IMG:    "images/gruasesmar/conocenos.png",

    FLOTA_TIT:      "Nuestra flota",
    FLOTA_DESC:     "Disponemos de una flota de grúas equipadas con la última tecnología, todas ellas comunicadas por GPS con nuestra central para responder con rapidez. TEXT PENDENT — ampliar amb detalls reals de la flota (tipus de grues, quantitat...).",
    FLOTA_IMG:      "images/gruasesmar/flota.jpg",
    
    INSTAL_TIT:     "Nuestras instalaciones",
    INSTAL_DESC:    "Instalaciones de 800m² dotadas con la tecnología más avanzada en videovigilancia (CCTV), zona de taller para el mantenimiento de la flota, oficinas y sala de espera para clientes.",
    INSTAL_IMG:     "images/gruasesmar/instalaciones.jpg",


    // 6. SERVEIS — un sol bloc amb targetes (abans eren 6 pàgines separades)
    // Turismos i Motos: contingut real de la web original.
    // La resta: la web original tenia text de mostra (lorem ipsum) —
    // pendent que la clienta doni el text definitiu.
    QUE_FEM:        "Lo que hacemos",
    QUE_FEM_SRV:    "Nuestros servicios",

    ASSIST_CARRETERA: [
        { titol: "Turismos", desc: "Ofrecemos un servicio integral de asistencia y transporte para toda clase de vehículos en toda Cataluña.", url: "coches.html", img: "images/gruasesmar/servi/servicoches.jpg" },
        { titol: "Motocicletas", desc: "Trasladamos todo tipo de motocicletas. Portamotos abatible, remolque innovador con sistema de carga a nivel de suelo.", url: "motos.html", img: "images/gruasesmar/servi/servimotos.jpg" },
        { titol: "Vehículos pesados", desc: "Cuando tienes un problema con tu furgoneta o camión ligero, lo único que quieres es resolverlo lo antes posible.", url: "pesados.html", img: "images/gruasesmar/servi/servipesados.jpg" },
    ],
    ALTRES_SERVEIS: [
        { titol: "Cambios de baterías a domicilio", desc: "Cambio de batería a domicilio o estés donde estés. No te supondrá ningún inconveniente.", url: "servicios/baterias.html", img: "images/gruasesmar/servi/servibaterias.png" },
        { titol: "Reparación de neumáticos in situ", desc: "Reparación temporal de pinchazos para que puedas seguir con tu camino.", url: "servicios/neumaticos.html", img: "images/gruasesmar/servi/servipneumaticos.jpg" },
        { titol: "Servicio ITV", desc: "Con nuestro servicio de ITV a domicilio, te pasamos la ITV sin que salgas de casa.", url: "servicios/itv.html", img: "images/gruasesmar/servi/serviitv.jpg" },
    ],
    
    ASSEG_TIT:      "Trabajamos con aseguradoras",
    ASSEG_DESC:     "Ofrecemos nuestros servicios para su compañía",
    ASSEG_BOTO:     "Contacta con nosotros",
    ASSEG_IMG:      "images/gruasesmar/aseguradoras.jpg",

    STATS_IMG:      "images/gruasesmar/stats-fons.jpg",
    STATS_BOTO:     "PEDIR GRÚA AHORA",

    // 8. CONTACTE
    ON_SOM:         "",
    ON_SOM_TIT:     "Dónde estamos...",   //Ven a vernos
    HORA_0:         "Horario", HR: "🕐",
    HORA_1:         "Asistencia 24 horas, los 365 días del año",

    // 6. SEGURETAT
    SITIOS_SEGUROS: ["altervector.com", "pages.dev", "altervector.github.io", "localhost", "127.0.0.1"],
};