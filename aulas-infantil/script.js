// Carregar plano salvo ao abrir
document.addEventListener('DOMContentLoaded', () => {
    const savedPlan = localStorage.getItem('meuPlanoDeAula');
    if (savedPlan) {
        document.getElementById('lessonPlan').value = savedPlan;
    }
});

function savePlan() {
    const plan = document.getElementById('lessonPlan').value;
    
    if (plan.trim() === "") {
        alert("Ops! Escreva algo antes de salvar ✍️");
        return;
    }

    localStorage.setItem('meuPlanoDeAula', plan);
    alert("Plano salvo com sucesso! Boa aula, Prô! 🌟");
}