const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const newUser = req.body;
  const usersFilePath = path.join(__dirname, './app/data/users.json');

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Помилка сервера' });

    let users = data ? JSON.parse(data) : [];

    if (users.some((user) => user.email === newUser.email)) {
      return res.status(400).json({ message: 'Користувач з таким email вже зареєстрований' });
    }

    users.push(newUser);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ message: 'Помилка сервера' });
      res.status(200).json({ message: 'Реєстрація успішна!' });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const usersFilePath = path.join(__dirname, './app/data/users.json');

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Помилка сервера' });

    const users = JSON.parse(data);
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Неправильний логін або пароль' });
    }
  });
});

app.use(express.static(path.join(__dirname, './')));

app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});
