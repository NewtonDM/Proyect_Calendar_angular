export class AulasMock {
  static getData() {
    return [
      { Id: 1, Codigo: "S101", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
      { Id: 2, Codigo: "S02", Capacidad: 60, isLaboratorio: 0, Estado: 1 },
      { Id: 3, Codigo: "S05", Capacidad: 60, isLaboratorio: 1, Estado: 1 },
    ];
  }
}
