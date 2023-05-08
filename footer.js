class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="footer">
                <a href="https://github.com/jhoitenga" target="_blank">My GitHub</a>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue Web Development Degree</a>
                <a href="https://www.youtube.com/user/bellevueuniversity" target="_blank">Bellevue University YouTube</a>
                <a href="https://github.com/buwebdev/web-330" target="_blank">WEB-330 GitHub</a> 
            </div>
            `;
    }
}

customElements.define("footer-component", Footer);