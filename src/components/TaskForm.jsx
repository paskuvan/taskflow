import { useState } from "react";

function TaskForm({ gestor, actualizar }) {
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    gestor.agregarTarea(descripcion);
    setDescripcion("");
    actualizar();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        placeholder="Nueva tarea"
        required
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition">
        Agregar
      </button>
    </form>
  );
}


export default TaskForm;
