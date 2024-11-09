import { displayMessage, handleResponse } from './common.js';

export function registerUser(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    return displayMessage('Паролі не співпадають', 'error');
  }

  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, lastName, email, password }),
  })
    .then(handleResponse)
    .then((data) => displayMessage(data.message, 'success'))
    .catch((error) => displayMessage(error.message, 'error'));
}
