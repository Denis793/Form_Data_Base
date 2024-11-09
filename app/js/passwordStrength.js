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

export function updatePasswordStrength() {
  const password = document.getElementById('registerPassword').value;
  const strengthIndicator = document.getElementById('password-strength');

  if (password.length === 0) {
    strengthIndicator.style.display = 'none';
    strengthIndicator.textContent = '';
    return;
  }

  strengthIndicator.style.display = 'block';
  const strength = checkPasswordStrength(password);

  strengthIndicator.dataset.strength = strength;
  strengthIndicator.textContent =
    strength === 'strong' ? 'Висока надійність' : strength === 'medium' ? 'Середня надійність' : 'Слабкий пароль';
}
