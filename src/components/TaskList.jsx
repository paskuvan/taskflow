import TaskItem from "./TaskItem";

function TaskList({ gestor, actualizar }) {
  return (
    <ul className="space-y-2">
      {gestor.tareas.map(t => (
        <TaskItem
          key={t.id}
          tarea={t}
          gestor={gestor}
          actualizar={actualizar}
        />
      ))}
    </ul>
  );
}


export default TaskList;
