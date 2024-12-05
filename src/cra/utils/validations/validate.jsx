export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/.test(name);

  if (!isEmailValid) return "Enter a valid email.";
  if (!isPasswordValid) return "Enter a valid password.";
  if (!isNameValid) return "Enter a valid name.";

  return null;
};
