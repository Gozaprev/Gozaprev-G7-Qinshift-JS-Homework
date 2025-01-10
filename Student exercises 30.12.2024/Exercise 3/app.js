// const taskInput = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// let tasks = [];

// addButton.addEventListener('click', () => {
//     const taskName = taskInput.value.trim();
//     if (taskName) {
//         const task = {
//             name: taskName,
//             isCompleted: false
//         };
//         tasks.push(task);
//         taskInput.value = '';
//         renderTasks();
//     }
// });

// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.className = task.isCompleted ? 'completed' : '';
        
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.isCompleted;
//         checkbox.addEventListener('change', () => {
//             task.isCompleted = checkbox.checked;
//             renderTasks();
//         });

//         li.appendChild(checkbox);
//         li.appendChild(document.createTextNode(task.name));
//         taskList.appendChild(li);
//     });
// }


const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

const tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement('li');
        li.className = task.isCompleted ? 'completed' : ''; // ternaren operator, moze i vaka: li.className = task.isCompleted && 'completed' || '';

        // if (task.isCompleted) {
        //     li.className = 'completed';
        // } else {
        //     li.className = '';
        // }
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.isCompleted;
        checkbox.addEventListener('change', (function(index) {
            return function() {
                tasks[index].isCompleted = checkbox.checked;
                renderTasks();
            };
        })(i));

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task.name));
        taskList.appendChild(li);
    }
}

addButton.addEventListener('click', function() {
    let taskName = taskInput.value.trim();
    if (taskName) {
        let task = {
            name: taskName,
            isCompleted: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach(function(task, index) {
//         let li = document.createElement('li');
//         li.className = task.isCompleted ? 'completed' : '';
        
//         let checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.isCompleted;
//         checkbox.addEventListener('change', function() {
//             task.isCompleted = checkbox.checked;
//             renderTasks();
//         });

//         li.appendChild(checkbox);
//         li.appendChild(document.createTextNode(task.name));
//         taskList.appendChild(li);
//     });
// }
