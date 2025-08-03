const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors({
  origin: 'http://localhost:5173'  // hanya izinkan dari frontend ini
}));
app.get('/hello', (req, res) => {
  res.send({
    "greet": "hello world",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
