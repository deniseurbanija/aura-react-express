const validate = (input) => {
  let isValid = true;
  const numberRegex = /^[0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //validate name and username
  if (input.username.length < 2) {
    isValid = false;
  }
  if (input.name.length < 2) {
    isValid = false;
  }

  //validate password
  if (!input.password) {
    isValid = false;
  }

  //validate email
  if (!emailRegex.test(input.email)) {
    isValid = false;
  }

  //validate birthdate
  if (!input.birthdate) {
    isValid = false;
  }

  //validate dni
  if (!numberRegex.test(input.nDni)) {
    isValid = false;
  }

  return isValid;
};

export default validate;
