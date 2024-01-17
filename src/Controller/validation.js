function validateDisplayName(displayName) {
  if (!displayName || displayName.length < 8) {
    return '"displayName" length must be at least 8 characters long';
  }
  return null;
}
  
function validateEmail(email) {
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return '"email" must be a valid email';
  }
  return null;
}
  
function validatePassword(password) {
  if (!password || password.length < 6) {
    return '"password" length must be at least 6 characters long';
  }
  return null;
}
  
function validateUserData(userData) {
  return validateDisplayName(userData.displayName)
           || validateEmail(userData.email)
           || validatePassword(userData.password);
}
  
module.exports = { validateUserData };