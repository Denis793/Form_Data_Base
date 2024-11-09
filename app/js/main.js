import { showForm } from './common.js';
import { loginUser } from './login.js';
import { registerUser } from './register.js';
import { initializePasswordToggle } from './togglePassword.js';
import { updatePasswordStrength } from './passwordStrength.js';
import { generatePassword } from './passwordGenerator.js';

document.getElementById('showRegister').addEventListener('click', () => showForm('register'));
document.getElementById('showLogin').addEventListener('click', () => showForm('login'));
document.getElementById('registerForm').addEventListener('submit', registerUser);
document.getElementById('loginForm').addEventListener('submit', loginUser);
initializePasswordToggle();

document.getElementById('registerPassword').addEventListener('input', updatePasswordStrength);

document.getElementById('generatePasswordBtn').addEventListener('click', () => {
  const generatedPassword = generatePassword();
  const passwordInput = document.getElementById('registerPassword');
  passwordInput.value = generatedPassword;
  updatePasswordStrength();
});
