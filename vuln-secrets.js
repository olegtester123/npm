// SAST: hardcoded secrets / credentials
const API_KEY = 'sk-live-51a1b2c3d4e5f6789';
const DB_PASSWORD = 'admin123';
const JWT_SECRET = 'super-secret-key-do-not-share';

function getConnectionString() {
  return `mongodb://admin:${DB_PASSWORD}@localhost:27017`;
}

module.exports = { API_KEY, getConnectionString, JWT_SECRET };
