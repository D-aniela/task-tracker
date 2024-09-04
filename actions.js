function addTask(loadTasks, description, saveTasks) {
  const tasks = loadTasks()
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    status: 'todo',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  tasks.push(newTask)
  saveTasks(tasks)
  return `Tarea agregada exitosamente (ID: ${newTask.id})`
}

function updateTask(id, description, loadTasks, saveTasks) {
  const tasks = loadTasks()
  const task = tasks.find((task) => task.id === id)
  if (!task) {
    return 'Tarea no encontrada'
  }
  task.description = description
  task.updatedAt = new Date()
  saveTasks(tasks)
  return `Tarea actualizada (Id: ${id})`
}

function removeTask(id, loadTasks, saveTasks) {
  const tasks = loadTasks()
  const taskIndex = tasks.findIndex((task) => task.id === id)
  if (taskIndex === -1) {
    return 'Tarea no encontrada'
  }
  tasks.splice(taskIndex, 1)
  saveTasks(tasks)
  return `Tarea eliminada (Id: ${id})`
}

function updateStatusTask(id, loadTasks, status, saveTasks) {
  const tasks = loadTasks()
  const task = tasks.find((task) => task.id === id)
  if (!task) {
    return 'Tarea no encontrada'
  }
  task.status = status
  task.updatedAt = new Date()
  saveTasks(tasks)
  return `Tarea actualizada (Id: ${id})`
}

module.exports = { addTask, updateTask, removeTask, updateStatusTask }
