// Функція для перевірки рівня надійності пароля
function checkPasswordStrength(password) {
  const hasNumber = /\d/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let strength = 'weak';
  if (password.length >= 10 && hasNumber && hasLowercase && hasUppercase && hasSpecialChar) {
    strength = 'strong';
  } else if (password.length >= 8 && (hasNumber || hasLowercase || hasUppercase || hasSpecialChar)) {
    strength = 'medium';
  }

  return strength;
}

// Функція для оновлення індикатора надійності пароля
export function updatePasswordStrength() {
  const password = document.getElementById('registerPassword').value;
  const strengthIndicator = document.getElementById('password-strength');

  if (password.length === 0) {
    // Приховуємо індикатор, якщо поле пароля порожнє
    strengthIndicator.style.display = 'none';
    strengthIndicator.textContent = '';
    return;
  }

  // Відображаємо індикатор і перевіряємо рівень надійності
  strengthIndicator.style.display = 'block';
  const strength = checkPasswordStrength(password);

  // Оновлюємо текст і колір індикатора відповідно до рівня надійності
  strengthIndicator.dataset.strength = strength;
  strengthIndicator.textContent =
    strength === 'strong' ? 'Висока надійність' : strength === 'medium' ? 'Середня надійність' : 'Слабкий пароль';
}
