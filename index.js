const fs = require('fs')
const path = require('path')
const {
  addTask,
  updateTask,
  removeTask,
  updateStatusTask,
} = require('./actions')

// Path a JSON
const tasksPath = path.join(__dirname, 'tasks.json')

// Verificar que existe JSON
if (!fs.existsSync(tasksPath)) {
  fs.writeFileSync(tasksPath, JSON.stringify([]))
}

// Devuelve un arreglo que contiene los argumentos pasados || process.argv
const args = process.argv.slice(2)
const command = args[0]
const taskId = args[1]
const taskDescription = args.slice(1).join(' ')

function loadTasks() {
  // Leer el archivo JSON
  const data = fs.readFileSync(tasksPath)
  return JSON.parse(data) // Parsear y devolver las tareas
}

function saveTasks(tasks) {
  // Guardar en el archivo JSON
  fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2))
}

switch (command) {
  case 'add':
    const addNewTask = addTask(loadTasks, taskDescription, saveTasks)
    console.log(addNewTask)
    break

  case 'update':
    const update = updateTask(
      parseInt(taskId),
      taskDescription,
      loadTasks,
      saveTasks
    )
    console.log(update)
    break

  case 'remove':
    const remove = removeTask(parseInt(taskId), loadTasks, saveTasks)
    console.log(remove)
    break

  case 'mark-in-progress':
    const updateStatusProgress = updateStatusTask(
      parseInt(taskId),
      loadTasks,
      'in-progress',
      saveTasks
    )
    console.log(updateStatusProgress)
    break

  case 'mark-done':
    const updateStatusDone = updateStatusTask(
      parseInt(taskId),
      loadTasks,
      'done',
      saveTasks
    )
    console.log(updateStatusDone)
    break

  case 'list':
    const tasks = loadTasks()
    tasks.forEach((task) => {
      console.log(
        tasks.length
          ? `${task.id} - ${task.description} - ${task.status} - ${task.createdAt}`
          : 'No hay tareas'
      )
    })
    break

  default:
    console.log('Comando no reconocido')
    break
}

module.exports = { loadTasks, saveTasks }
