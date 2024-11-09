import { displayMessage, handleResponse } from './common.js';

export function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
    .then((data) => {
      displayMessage(`Ласкаво просимо, ${data.user.name}!`, 'success');
    })
    .catch((error) => displayMessage(error.message, 'error'));
}
