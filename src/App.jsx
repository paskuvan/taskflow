import { useState, useEffect } from "react";
import { GestorTareas } from "./models/GestorTareas";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const gestor = new GestorTareas();

function App() {
  const [, setRender] = useState(false);
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const actualizar = () => setRender(r => !r);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            TaskFlow - Gestión de Tareas
          </h1>
          <button
            onClick={() => setDark(d => !d)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
        <TaskForm gestor={gestor} actualizar={actualizar} />
        <TaskList gestor={gestor} actualizar={actualizar} />
      </div>
    </div>
  );
}

export default App;
