function validaAluno(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    let media = soma / notas.length;

    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

let notasDoJoao = [8, 7, 9, 8];
let resultadoJoao = validaAluno(notasDoJoao);
console.log("Resultado do João:", resultadoJoao); 

let notasDaMaria = [5, 6, 7, 4];
let resultadoMaria = validaAluno(notasDaMaria);
console.log("Resultado da Maria:", resultadoMaria); 