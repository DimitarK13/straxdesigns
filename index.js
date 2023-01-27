require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/projects', express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/about-us', (req, res) => {
  res.render('about-us');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us');
});

app.get('/projects/neotek-systems', (req, res) => {
  res.render('projects/neotek-systems');
});

app.get('/projects/breathing-darkness', (req, res) => {
  res.render('projects/breathing-darkness');
});

app.get('/projects/niol', (req, res) => {
  res.render('projects/niol');
});

app.post('/', (req, res) => {
  const { name, email, date } = req.body;

  const options = {
    from: 'dimikalapocev@gmail.com',
    to: 'info@straxdesigns.com',
    subject: `Schedule a Meeting Request by ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nRequested Date: ${date}`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) console.log(err);
    console.log(info.response);
  });

  res.redirect('/');
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
