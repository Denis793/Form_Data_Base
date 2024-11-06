import { displayMessage } from './common.js';

export function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        displayMessage(`Ласкаво просимо, ${data.user.name}!`, 'success');
      } else {
        displayMessage(data.message || 'Помилка авторизації', 'error');
      }
    })
    .catch((error) => displayMessage(error.message, 'error'));
}
