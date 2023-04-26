class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="banner">
        <h1>Jennifer Hoitenga</h1>
    </div>
        <nav class="nav-bar">
            <a href="./index.html">Home</a>
            <a href="./about.html">About</a>
            <a href="./resume.html">Resume</a>
            <a href="./project.html">Projects</a>
            <a href="./database-diagrams.html">Database Diagrams</a>
            <a href="./api.html">API Unit Tests</a>
        </nav>
        `;
    }
}

customElements.define("header-component", Header);