class FooterComponent extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML =
            `  
            
            
            
            `
    }
}

customElements.define("-component", FooterComponent);
