class DiarioClasse {
    constructor() {
        this.medias = []; //Salvar as médias
    }

    validaAluno(notas) {
    
        let media = notas.reduce((total, n) => total + n, 0) / notas.length;
        
        this.medias.push(media);

        return media >= 7 ? "Aprovado" : "Reprovado";
    }

    porcentagemAprovados() {
        let aprovados = this.medias.filter(m => m >= 7).length;

        let porcentagem = (aprovados / this.medias.length) * 100;

        return `Aprovados: ${porcentagem}%`;
    }
}