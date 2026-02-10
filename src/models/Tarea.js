export class Tarea {
  constructor(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
    this.estado = "pendiente";
    this.fechaCreacion = new Date();
  }

  cambiarEstado() {
    this.estado = this.estado === "pendiente" ? "completada" : "pendiente";
  }
}
