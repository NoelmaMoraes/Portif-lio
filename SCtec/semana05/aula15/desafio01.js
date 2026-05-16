class CasaInteligente {
    constructor() {
        this.temAlguem = false;
    }

    tocToc() {
        if (this.temAlguem) {
            return "Quem é?";
       

let casa = new CasaInteligente();

console.log(casa.tocToc());

casa.temAlguem = true;
console.log(casa.tocToc());

casa.temAlguem = false;
console.log(casa.tocToc());