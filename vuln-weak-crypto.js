// SAST: weak crypto - MD5, DES, predictable IV
const crypto = require('crypto');

function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

function encrypt(data, key) {
  const cipher = crypto.createCipheriv('des-ecb', key, Buffer.alloc(0));
  return cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
}

function weakRandom() {
  return Math.random().toString(36);
}

module.exports = { hashPassword, encrypt, weakRandom };
