import { Tarea } from "./Tarea";

export class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(descripcion) {
    const nuevaTarea = new Tarea(Date.now(), descripcion);
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  cambiarEstado(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) tarea.cambiarEstado();
  }
}
