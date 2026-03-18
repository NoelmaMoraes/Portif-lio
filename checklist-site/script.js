// Carregar dados ao iniciar
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask(day) {
    const card = document.querySelector(`.day-card[data-day="${day}"]`);
    const input = card.querySelector('input');
    const text = input.value.trim();

    if (text === "") return;

    createTaskElement(day, text, false);
    saveTasks();
    input.value = "";
}

function createTaskElement(day, text, isDone) {
    const list = document.querySelector(`.day-card[data-day="${day}"] .task-list`);
    const li = document.createElement('li');
    
    li.innerHTML = `<span>${text}</span> <i class="fas fa-trash" onclick="removeTask(this)"></i>`;
    if (isDone) li.classList.add('done');

    // Clique para marcar/desmarcar
    li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'I') {
            li.classList.toggle('done');
            saveTasks();
        }
    });

    list.appendChild(li);
}

function removeTask(icon) {
    icon.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    const data = {};
    document.querySelectorAll('.day-card').forEach(card => {
        const day = card.dataset.day;
        const tasks = [];
        card.querySelectorAll('.task-list li').forEach(li => {
            tasks.push({
                text: li.querySelector('span').innerText,
                done: li.classList.contains('done')
            });
        });
        data[day] = tasks;
    });
    localStorage.setItem('weeklyPlannerTasks', JSON.stringify(data));
}

function loadTasks() {
    const saved = localStorage.getItem('weeklyPlannerTasks');
    if (!saved) return;

    const data = JSON.parse(saved);
    for (const day in data) {
        data[day].forEach(task => {
            createTaskElement(day, task.text, task.done);
        });
    }
}

function resetWeek() {
    if (confirm("Deseja apagar todas as tarefas da semana?")) {
        document.querySelectorAll('.task-list').forEach(list => list.innerHTML = "");
        localStorage.removeItem('weeklyPlannerTasks');
    }
}