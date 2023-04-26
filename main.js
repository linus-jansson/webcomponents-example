function getTemplate(filepath) {
    return fetch(filepath)
        .then(async (response) => {
            let txt = await response.text();
            let html = new DOMParser().parseFromString(txt, 'text/html');

            return html.querySelector('template');
        });
}  

// Skapa ett nytt element som heter nti-button som ärver från HTMLElement
class NTIButton extends HTMLElement {
    constructor() {
        super();
        // hämta template från nti-button.html
        getTemplate("components/nti-button.html")
        .then((template) => {
            const content = template.content;
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(content.cloneNode(true));
        });
    }
}

// Registrera elementet
customElements.define('nti-button', NTIButton)