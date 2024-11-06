export function showForm(type) {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById(`${type}Form`).classList.remove('hidden');
}

export function displayMessage(msg, type = 'success') {
  const messageDiv = document.getElementById('message');
  messageDiv.innerText = msg;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
}
