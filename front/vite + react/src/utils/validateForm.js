const validateForm = (form) => {
  const { date, time } = form;
  let isValid = true;
  const currentDate = new Date();

  // Validar si la fecha y la hora están presentes
  if (!date || !time) {
    isValid = false;
  }

  // Convertir la fecha a un objeto Date para obtener el día de la semana y la hora
  const selectedDate = new Date(date);
  const selectedDay = selectedDate.getDay(); // 0 para domingo, 1 para lunes, etc.
  const selectedTime = new Date(`01/01/2000 ${time}`); // Solo nos importa la hora

  // Validar si el día es lunes, martes, miércoles, jueves o viernes
  if (selectedDay < 1 || selectedDay > 5) {
    isValid = false;
  }

  // Validar si la hora está entre las 9AM y las 5PM
  const startTime = new Date(`01/01/2000 09:00 AM`);
  const endTime = new Date(`01/01/2000 05:00 PM`);
  
  if (selectedTime < startTime || selectedTime > endTime) {
    isValid = false;
  }

  // Validar si la fecha no es igual a la fecha actual ni un día del pasado
  if (selectedDate <= currentDate) {
    isValid = false;
  }

  return isValid;
};

export default validateForm;

