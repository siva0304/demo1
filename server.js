const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const SECRET_PW1 = process.env.SECRET_PW1;
const SECRET_PW2 = process.env.SECRET_PW2;

app.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === SECRET_PW1 || password === SECRET_PW2) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password!' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
