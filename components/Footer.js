class FooterComponent extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML =
            `   
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Desarrolado &copy; por: </div>
                        <div>
                            <a href="https://www.linkedin.com/in/estefan%C3%ADa-moncaleano">Estefanía Moncaleano</a>
                            &middot;
                            <a href="https://portafolio-react-og8w6l76g-estefamh.vercel.app/skills">Portafolio </a>
                        </div>
                    </div>
                </div>
            </footer>
                `
    }
}

customElements.define("footer-component", FooterComponent);
