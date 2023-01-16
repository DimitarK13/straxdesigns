const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${3000}`);
});
