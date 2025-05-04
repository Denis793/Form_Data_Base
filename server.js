const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersFilePath = path.join(__dirname, './app/data/users.json');

// Check if the file exists, if not — create it
if (!fs.existsSync(usersFilePath)) {
  fs.mkdirSync(path.dirname(usersFilePath), { recursive: true });
  fs.writeFileSync(usersFilePath, '[]');
}

app.post('/register', (req, res) => {
  const newUser = req.body;

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Server error' });

    let users = data ? JSON.parse(data) : [];

    if (users.some((user) => user.email === newUser.email)) {
      return res.status(400).json({ message: 'A user with this email is already registered' });
    }

    users.push(newUser);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ message: 'Server error' });
      res.status(200).json({ message: 'Registration successful!' });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  fs.readFile(usersFilePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Server error' });

    const users = JSON.parse(data);
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect email or password' });
    }
  });
});

app.use(express.static(path.join(__dirname, './')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
