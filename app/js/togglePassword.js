// Функція для показу пароля при натисканні і приховування при відпусканні
function showPasswordOnHold(event) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);

  // Показуємо пароль при натисканні
  passwordInput.type = 'text';
}

// Функція для приховування пароля
function hidePassword(event) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);

  // Приховуємо пароль при відпусканні або виході за межі іконки
  passwordInput.type = 'password';
}

// Додаємо обробники подій для всіх іконок "перемикання пароля"
export function initializePasswordToggle() {
  document.querySelectorAll('.toggle-password').forEach((icon) => {
    icon.addEventListener('mousedown', showPasswordOnHold); // Показує пароль при натисканні
    icon.addEventListener('mouseup', hidePassword); // Приховує пароль при відпусканні
    icon.addEventListener('mouseleave', hidePassword); // Приховує, якщо курсор залишає іконку
  });
}
