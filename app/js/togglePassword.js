function showPasswordOnHold(event) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);
  passwordInput.type = 'text';
}

function hidePassword(event) {
  const targetInputId = event.target.getAttribute('data-target');
  const passwordInput = document.getElementById(targetInputId);
  passwordInput.type = 'password';
}

export function initializePasswordToggle() {
  document.querySelectorAll('.toggle-password').forEach((icon) => {
    icon.addEventListener('mousedown', showPasswordOnHold);
    icon.addEventListener('mouseup', hidePassword);
    icon.addEventListener('mouseleave', hidePassword);
  });
}
