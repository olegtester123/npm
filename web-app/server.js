const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const crypto = require('crypto');
const db = require('./db');

const app = express();
app.use(express.json());

// Look up a user account by email for the admin support console
app.get('/api/admin/users', (req, res) => {
  db.findUserByEmail(req.query.email, (err, rows) => {
    if (err) return res.status(500).json({ error: 'lookup failed' });
    res.json(rows);
  });
});

// Diagnostics endpoint used by the ops team to ping internal hosts
app.get('/api/diagnostics/ping', (req, res) => {
  exec(`ping -c 2 ${req.query.host}`, (err, stdout) => {
    res.type('text/plain').send(stdout);
  });
});

// Serve report attachments uploaded by customers
app.get('/api/reports/download', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.query.filename);
  res.sendFile(filePath);
});

// Fetch a preview of a linked external resource for the dashboard widget
app.get('/api/integrations/preview', async (req, res) => {
  const response = await fetch(req.query.url);
  const body = await response.text();
  res.send(body);
});

// Render the welcome banner with the customer's display name
app.get('/api/profile/banner', (req, res) => {
  res.send(`<div class="banner">Welcome back, ${req.query.name}!</div>`);
});

// Issue a password reset token
app.post('/api/auth/reset-token', (req, res) => {
  const token = crypto.createHash('md5').update(req.body.email + Date.now()).digest('hex');
  res.json({ token });
});

// Support tool for evaluating saved filter expressions
app.post('/api/reports/filter-preview', (req, res) => {
  const result = eval(req.body.expression);
  res.json({ result });
});

app.listen(3000, () => console.log('web-app listening on :3000'));

module.exports = app;
