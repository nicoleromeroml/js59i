//array para guardar las tareas
let tasks = [];



function submitForm(event){
    event.preventDefault()
}


//funcion para mostrar las tareas
function renderTasks () {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        //creamos el elem.
        const listItem = document.createElement('div');
        listItem.classList.add('taskItem');
        //agregamos la informacion
        listItem.innerHTML = `
        <span>${task}</span>
        <div>
        <button onclick="editTask(${index})">Editar</button>
        <button onclick="deleteTask(${index})">Eliminar</button>
        </div>
        `
        //buscamos al padre
        //adoptamos al hijo
        taskList.appendChild(listItem)
    });
}


//agregar la nueva tarea
function addTask () {
const taskInput = document.getElementById('taskInput')
const newTask = taskInput.value;

if(newTask){
    tasks.push(newTask);
    taskInput.value = ""
    renderTasks();
    
}
}

//escuchador de eventos ADDEVENTLISTENER

document.getElementById('addButton').addEventListener('click', addTask);


renderTasks()

//editar una tarea
function editTask(index){
    const updatedTask = prompt("Editar tarea", tasks[index])
    if(updatedTask !== null){
        tasks[index] = updatedTask;
        renderTasks()
    }

}

//eliminar tarea 
function deleteTask(index){
    const confirmDelete = confirm("Deseas eliminar la tarea?");
    if(confirmDelete){
        tasks.splice(index, 1);
        renderTasks()
    }

}

