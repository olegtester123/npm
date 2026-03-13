// SAST: SSRF - user-controlled URL in fetch/request
const https = require('https');
const http = require('http');

async function fetchUrl(userUrl) {
  const res = await fetch(userUrl);
  return res.text();
}

function getResource(urlFromUser) {
  return new Promise((resolve) => {
    https.get(urlFromUser, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    });
  });
}

module.exports = { fetchUrl, getResource };
