function checkPasswordStrength(password) {
  if (!/^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/.test(password)) {
    return 'weak';
  }

  const upper = (password.match(/[A-Z]/g) || []).length;
  const digits = (password.match(/[0-9]/g) || []).length;
  const special = (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length;

  if (/^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password)) {
    return 'weak';
  }

  if (upper >= 2 && special >= 2 && digits >= 2) return 'strong';
  if (upper >= 1 && special >= 1) return 'medium';

  return 'weak';
}

export function updatePasswordStrength() {
  const passwordInput = document.getElementById('registerPassword');
  const strengthIndicator = document.getElementById('password-strength');

  if (!passwordInput || !strengthIndicator) return;

  const password = passwordInput.value.trim();
  const isEmpty = password.length === 0;

  strengthIndicator.classList.toggle('hidden', isEmpty);
  if (isEmpty) {
    strengthIndicator.removeAttribute('data-strength');
    return;
  }

  const strength = checkPasswordStrength(password);
  strengthIndicator.setAttribute('data-strength', strength);
}
