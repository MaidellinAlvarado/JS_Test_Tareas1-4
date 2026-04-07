// clase  molde
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    console.log(`Se han solicitado ${daysOff} días de vacaciones.`);
    this._remainingVacationDays -= daysOff; //forma corta de restar -= pero podriamos escribirlo como this._remainingVacationDays = this._remainingVacationDays - daysOff;

  }
} 

// USO DE LA CLASE 
const miEmpleado = new HospitalEmployee('Dra. García');
miEmpleado.takeVacationDays(7);