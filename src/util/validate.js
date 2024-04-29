export const checkvalidate = (email, password) => {
  const isvalidemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isvalidpass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isvalidemail) return "email is not valid";
  if (!isvalidpass) return " password is not valid";
  return null;
};
