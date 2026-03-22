class Surgeon {
  constructor(name, department) {
  
    this._name = name;
    this._department = department;
    // Agregar _remainingVacationDays igual a 20
    this._remainingVacationDays = 20;
  }

  // los getters requeridos 

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  // Método para tomar días de vacaciones
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}


const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

surgeonRomero.takeVacationDays(8);
console.log( "dias de vacaiones", surgeonRomero.remainingVacationDays); // Debería mostrar 12
