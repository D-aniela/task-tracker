# TASK TRACKER

Práctica utilizando node.js y javascript, llamado "Task-Tracker" en el que por medio de comandos, podemos agregar una lista de tareas a relizar e ir actualizandola por medio de los comandos.




## Comandos

Para poder utilizar el task tracker, utilizar los siguientes comandos

Agregar
```bash
  node index.js add 'New task'
```
Actualizar
```bash
  node index.js update 1 'Updated task'
```
Status: 'In -progress'
```bash
  node index.js mark-in-progress 1
```
Status: 'Done'
```bash
  node index.js mark-done 1
```
Eliminar
```bash
  node index.js remove 1
```

#### O se puede utilizar mediante scripts: 
Agregar
```bash
  yarn add 'New task'
```
Actualizar
```bash
  yarn update 1 'Updated task'
```
Status: 'In -progress'
```bash
  yarn progress 1
```
Status: 'Done'
```bash
  yarn done 1
```
Eliminar
```bash
  yarn remove 1
```

## Propiedades utilizadas

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | Identificador único de la tarea |
| `description` | `string` | Descripción de la tarea |
| `status` | `string` | Tres status que se manejan (`todo, in-progress, done`) |
| `createdAt` | `string` | Fecha en la que se creó la tarea |
| `updatedAt` | `string` | Fecha en la que se actualizó la tarea |

