class DiarioClasse {
    constructor() {
        this.medias = []; // Guarda a média final
    }

    validaAluno(disciplinas) {
        const calcMedia = (notas) => notas.reduce((t, n) => t + n, 0) / notas.length;

        let mediaMat = calcMedia(disciplinas.matematica);
        let mediaHist = calcMedia(disciplinas.historia);
        let mediaPort = calcMedia(disciplinas.portugues);

        let mediaFinal = (mediaMat + mediaHist + mediaPort) / 3;
        
        this.medias.push(mediaFinal); // Salva no array global da classe

        return mediaFinal >= 7 ? "Aprovado" : "Reprovado";
    }

    porcentagemAprovados() {
        let aprovados = this.medias.filter(m => m >= 7).length;
        let porcentagem = (aprovados / this.medias.length) * 100;
        return `Aprovados: ${porcentagem}%`;
    }
}

// --- CÓDIGO DE TESTE ---

// 1. Criamos o diário
// --- COLE ESTA PARTE NO FINAL DO SEU ARQUIVO DEPOIS DA CLASSE ---

const diario = new DiarioClasse();

// Chamamos o método dentro do console.log para forçar a exibição na tela
console.log(diario.validaAluno({
    matematica: [8, 9, 7],
    historia: [8, 7, 9],
    portugues: [10, 9, 8]
})); 

console.log(diario.validaAluno({
    matematica: [5, 4, 6],
    historia: [6, 5, 5],
    portugues: [7, 6, 5]
}));

console.log(diario.porcentagemAprovados());