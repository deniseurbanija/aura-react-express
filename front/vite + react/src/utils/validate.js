const validate = (input) => {
  const errors = {};
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const numberRegex = /^[0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dateRedex =
    /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

  //validate name and username
  if (input.username.length < 2 ) {
    errors.username = "input too short";
  }
  if ( input.name.length < 2 ) {
    errors.name = "input too short";
  }

  //validate password
  if (!passwordRegex.test(input.password)) {
    errors.password = "invalid password";
  }

  //validate email
  if (!emailRegex.test(input.email)) {
    errors.email = "invalid email";
  }

  //validate birthdate
  if (!dateRedex.test(input.birthdate)) {
    errors.birthdate = "Birthdate is required";
  }

  //validate dni
  if (!numberRegex.test(input.nDni)) {
    errors.nDni = "invalid input";
  }

  return errors;
};

export default validate;
