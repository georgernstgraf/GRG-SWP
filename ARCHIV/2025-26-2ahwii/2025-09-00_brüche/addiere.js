class Bruch {
    ganzahligerTeil;
    zaehler;
    nenner;

    constructor(text) {
        if (text.includes(" ")) {
            const teile = text.split(" ");
            this.ganzahligerTeil = parseInt(teile[0]);
            const bruchTeil = teile[1].split("/");
            this.zaehler = parseInt(bruchTeil[0]);
            this.nenner = parseInt(bruchTeil[1]);
        } else if (text.includes("/")) {
            this.ganzahligerTeil = 0;
            const bruchTeil = text.split("/");
            this.zaehler = parseInt(bruchTeil[0]);
            this.nenner = parseInt(bruchTeil[1]);
        } else {
            this.ganzahligerTeil = parseInt(text);
            this.zaehler = 0;
            this.nenner = 1;
        }
        if (this.nenner === 0) {
            throw new Error("Nenner darf nicht null sein.");
        }

        this.kuerzen();
    }
    kuerzen() {
        if (this.zaehler >= this.nenner) {
            this.ganzahligerTeil += Math.floor(this.zaehler / this.nenner);
            this.zaehler = this.zaehler % this.nenner;
        }
        const ggt = this.groessterGemeinsamerTeiler(this.zaehler, this.nenner);
        if (ggt > 1) {
            this.zaehler = this.zaehler / ggt;
            this.nenner = this.nenner / ggt;
        }
    }
}
