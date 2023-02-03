const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dimikalapocev@gmail.com',
    pass: 'huecssjdcmcatbmi',
  },
});

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/projects', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Stax Designs' });
});

app.get('/index', (req, res) => {
  res.render('index', { title: 'Stax Designs' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Services | Strax Designs' });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', { title: 'About Us | Strax Designs' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects | Strax Designs' });
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us', { title: 'Contact Us | Strax Designs' });
});

app.get('/projects/neotek-systems', (req, res) => {
  res.render('projects/neotek-systems', { title: 'Projects | Strax Designs' });
});

app.post('/contact-us', (req, res) => {
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

  setTimeout(() => {
    res.redirect('/');
  }, 3000);
});

app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found | Strax Designs' });
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
