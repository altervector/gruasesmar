/* ============================================================
   FORM-CONTACTE.JS — Grúas Esmar
   Web Component: <form-contacte></form-contacte>
   Depèn de: config.js

   QUÈ FA AQUEST FITXER:
   Formulari de contacte reutilitzable — el poses a qualsevol
   pàgina amb l'etiqueta <form-contacte></form-contacte> i ja
   funciona sol, igual que <nav-comu> o <footer-comu>.

   ENVIAMENT:
   En clicar "Enviar" fa un POST a CONFIG.BASE_WORKER + "/contacte"
   amb les dades del formulari. El Worker encara està pendent
   de crear — de moment el botó mostrarà error de connexió,
   és normal fins que es munti aquella ruta.
   ============================================================ */

class FormContacte extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form class="form-contacte" id="form-contacte">
                <input type="text" id="fc-nom" placeholder="Nombre *" required>
                <input type="tel"  id="fc-telefon" placeholder="Teléfono *" required>
                <input type="email" id="fc-email" placeholder="Correo electrónico">
                <textarea id="fc-missatge" placeholder="¿En qué podemos ayudarte? *" required></textarea>

                <label style="display:flex; align-items:flex-start; gap:8px; font-size:12px; color:var(--gris);">
                    <input type="checkbox" id="fc-consentiment" required style="margin-top:3px;">
                    <span>He leído y acepto la <a href="privacitat.html" target="_blank">Política de Privacidad</a> *</span>
                </label>

                <div style="font-size:11px; color:var(--gris); background:var(--gris-clar); padding:10px 12px; border-radius:var(--radi); border-left:3px solid var(--vermell);">
                    <strong>Responsable:</strong> ${CONFIG.NOM} ·
                    <strong>Finalidad:</strong> responder tu consulta ·
                    <strong>Derechos:</strong> acceso, rectificación y supresión escribiendo a
                    <a href="mailto:${CONFIG.EMAIL}">${CONFIG.EMAIL}</a>
                </div>

                <button type="submit" class="hero-boto-principal" id="fc-boto">Enviar mensaje</button>
                <p id="fc-estat" style="font-size:13px; min-height:18px;"></p>
            </form>
        `;

        const form     = this.querySelector('#form-contacte');
        const boto     = this.querySelector('#fc-boto');
        const estat    = this.querySelector('#fc-estat');

        // submit → quan l'usuari envia el formulari
        // preventDefault → evita que la pàgina es recarregui (comportament per defecte del navegador)
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const dades = {
                nom:          this.querySelector('#fc-nom').value.trim(),
                telefon:      this.querySelector('#fc-telefon').value.trim(),
                email:        this.querySelector('#fc-email').value.trim(),
                missatge:     this.querySelector('#fc-missatge').value.trim(),
                consentiment: this.querySelector('#fc-consentiment').checked
            };

            boto.disabled = true;
            boto.textContent = 'Enviando...';
            estat.textContent = '';

            try {
                const res = await fetch(`${CONFIG.BASE_WORKER}/contacte`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dades)
                });

                if (res.ok) {
                    estat.textContent = '✅ Mensaje enviado correctamente. Le contactaremos lo antes posible.';
                    estat.style.color = 'green';
                    form.reset();
                } else {
                    throw new Error('Error del servidor');
                }
            } catch (error) {
                estat.textContent = '❌ No se ha podido enviar. Inténtelo de nuevo o llámenos directamente.';
                estat.style.color = 'var(--vermell)';
            }

            boto.disabled = false;
            boto.textContent = 'Enviar mensaje';
        });
    }
}
customElements.define('form-contacte', FormContacte);
