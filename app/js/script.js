import { showForm } from './common.js';
import { registerUser } from './register.js';
import { loginUser } from './login.js';

// Додаємо обробники подій для кнопок і форм
document.getElementById('showRegister').addEventListener('click', () => showForm('register'));
document.getElementById('showLogin').addEventListener('click', () => showForm('login'));

document.getElementById('registerForm').addEventListener('submit', registerUser);
document.getElementById('loginForm').addEventListener('submit', loginUser);

// Функція для показу пароля при натисканні і приховування при відпусканні
function showPasswordOnHold(event, show) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);

  if (show) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

// Додаємо обробники для перегляду пароля при натисканні
document.querySelectorAll('.toggle-password').forEach((icon) => {
  icon.addEventListener('mousedown', (event) => showPasswordOnHold(event, true)); // показує пароль при натисканні
  icon.addEventListener('mouseup', (event) => showPasswordOnHold(event, false)); // приховує пароль при відпусканні
  icon.addEventListener('mouseleave', (event) => showPasswordOnHold(event, false)); // приховує, якщо курсор залишає іконку
});
