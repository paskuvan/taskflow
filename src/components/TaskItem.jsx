function TaskItem({ tarea, gestor, actualizar }) {
  return (
    <li className="flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 transition-colors">
      <span
        className={`flex-1 ${
          tarea.estado === "completada"
            ? "line-through text-gray-400 dark:text-gray-500"
            : "text-gray-700 dark:text-gray-200"
        }`}
      >
        {tarea.descripcion}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => { gestor.cambiarEstado(tarea.id); actualizar(); }}
          className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
        >
          ✔
        </button>

        <button
          onClick={() => { gestor.eliminarTarea(tarea.id); actualizar(); }}
          className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
        >
          🗑
        </button>
      </div>
    </li>
  );
}


export default TaskItem;
