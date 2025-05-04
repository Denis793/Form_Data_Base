// Function to display registration and login forms
export function showForm(type) {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById(`${type}Form`).classList.remove('hidden');
}

// Function to display messages
export function displayMessage(msg, type = 'success') {
  const messageDiv = document.getElementById('message');
  messageDiv.innerText = msg;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
}

// Function to handle server response
export function handleResponse(response) {
  return response.json().then((data) => {
    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }
    return data;
  });
}
