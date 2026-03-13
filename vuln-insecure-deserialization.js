// SAST: insecure deserialization - unserialize / unsafe parse
function deserializeUserData(payload) {
  return JSON.parse(payload);
}

function cloneViaParse(str) {
  const obj = JSON.parse(str);
  return obj;
}

// Dangerous if payload contains __proto__ or constructor
function mergePayload(payload) {
  const data = JSON.parse(payload);
  return Object.assign({}, data);
}

module.exports = { deserializeUserData, cloneViaParse, mergePayload };
