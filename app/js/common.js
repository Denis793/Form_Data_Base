// Функція для відображення форм реєстрації та авторизації
export function showForm(type) {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById(`${type}Form`).classList.remove('hidden');
}

// Функція для відображення повідомлень
export function displayMessage(msg, type = 'success') {
  const messageDiv = document.getElementById('message');
  messageDiv.innerText = msg;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
}

// Функція для обробки відповіді сервера
export function handleResponse(response) {
  return response.json().then((data) => {
    if (!response.ok) {
      throw new Error(data.message || 'Сталася помилка');
    }
    return data;
  });
}
