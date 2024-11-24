/*=============== PASSWORD VALIDATION FUNCTION ===============*/
const validatePassword = (password) => {
   const minLength = 8;
   const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

   if (password.length < minLength) {
      alert('Password must be at least 8 characters long.');
      return false;
   }
   if (!specialCharPattern.test(password)) {
      alert('Password must contain at least one special character.');
      return false;
   }
   return true;
}

/*=============== SHOW HIDE PASSWORD LOGIN ===============*/
const passwordAccess = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      input.type === 'password' ? input.type = 'text' : input.type = 'password';

      // Icon change
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
   });

   // Validate password when input loses focus
   input.addEventListener('blur', () => {
      if (!validatePassword(input.value)) {
         input.focus();
      }
   });
}
passwordAccess('password', 'loginPassword');

/*=============== SHOW HIDE PASSWORD CREATE ACCOUNT ===============*/
const passwordRegister = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
      // Change password to text
      input.type === 'password' ? input.type = 'text' : input.type = 'password';

      // Icon change
      iconEye.classList.toggle('ri-eye-fill');
      iconEye.classList.toggle('ri-eye-off-fill');
   });

   // Validate password when input loses focus
   input.addEventListener('blur', () => {
      if (!validatePassword(input.value)) {
         input.focus();
      }
   });
}
passwordRegister('passwordCreate', 'loginPasswordCreate');

/*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
const loginAcessRegister = document.getElementById('loginAccessRegister'),
      buttonRegister = document.getElementById('loginButtonRegister'),
      buttonAccess = document.getElementById('loginButtonAccess');

buttonRegister.addEventListener('click', () => {
   loginAcessRegister.classList.add('active');
});

buttonAccess.addEventListener('click', () => {
   loginAcessRegister.classList.remove('active');
});
