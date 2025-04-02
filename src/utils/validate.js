export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid && !isPasswordValid) {
    return "Email and password not valid";
  } else if (!isEmailValid && isPasswordValid) {
    return "Email not valid";
  } else if (isEmailValid && !isPasswordValid) {
    return "Password not valid";
  } else {
    return null;
  }
};
