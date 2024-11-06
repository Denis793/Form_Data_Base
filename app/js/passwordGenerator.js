// Функція для генерації надійного пароля
export function generatePassword() {
  const length = 12;
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let password = '';

  // Гарантуємо, що пароль містить хоча б одну велику літеру, малу літеру, цифру та спеціальний символ
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

  // Заповнюємо залишок пароля випадковими символами з об'єднаного набору
  const allChars = lowercase + uppercase + numbers + specialChars;
  for (let i = 4; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Перемішуємо символи пароля для більшої випадковості
  password = password
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  return password;
}
