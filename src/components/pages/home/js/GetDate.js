export function getHour () {
  const fecha = new Date()
  let horas = fecha.getHours()
  let minutos = fecha.getMinutes()

  // Agregar cero delante de la hora si es necesario
  if (horas < 10) {
    horas = '0' + horas
  }

  // Agregar cero delante de los minutos si es necesario
  if (minutos < 10) {
    minutos = '0' + minutos
  }

  const horaActual = horas + ':' + minutos
  return horaActual
}
