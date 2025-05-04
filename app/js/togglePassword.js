import { updatePasswordStrength } from './passwordStrength.js';

function togglePasswordType(event, type) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);
  if (!passwordInput) return;

  passwordInput.type = type;

  if (targetInputId === 'registerPassword') {
    updatePasswordStrength();
  }
}

export function initializePasswordToggle() {
  document.querySelectorAll('.eye-icon').forEach((icon) => {
    icon.addEventListener('mousedown', (e) => togglePasswordType(e, 'text'));
    icon.addEventListener('mouseup', (e) => togglePasswordType(e, 'password'));
    icon.addEventListener('mouseleave', (e) => togglePasswordType(e, 'password'));
  });
}
