/* ============================================================
   NAV-COMU.JS — Grúas Esmar
   Web Component: <nav-comu></nav-comu>
   Fa la franja superior (tel/email) + el navbar.
   Igual a totes les pàgines, es crida amb una sola etiqueta.
   ============================================================ */

class NavComu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="franja-superior">
                <a href="tel:${CONFIG.TELEFON}">${CONFIG.TL} ${CONFIG.TELEFON}</a>
                <a href="mailto:${CONFIG.EMAIL}">${CONFIG.EM} ${CONFIG.EMAIL}</a>
            </div>
            <nav class="navbar">
                <div class="navbar-logo">
                    <img src="${CONFIG.ASSETS}${CONFIG.LOGO_T}" alt="${CONFIG.NOM}">
                </div>
                <button class="navbar-hamburguesa">☰</button>
                <ul class="navbar-menu">
                    <li><a href="index.html#qui-som">${CONFIG.NAV_NOS}</a></li>
                    <li><a href="index.html#serveis">${CONFIG.NAV_SER}</a></li>
                    <li><a href="index.html#contacte">${CONFIG.NAV_CON}</a></li>
                </ul>
            </nav>
        `;

        const btnHamburguesa = this.querySelector('.navbar-hamburguesa');
        const menu = this.querySelector('.navbar-menu');
        btnHamburguesa.addEventListener('click', () => menu.classList.toggle('obert'));
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => menu.classList.remove('obert'));
        });

        window.addEventListener('scroll', () => {
            const nav = this.querySelector('.navbar');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}
customElements.define('nav-comu', NavComu);
