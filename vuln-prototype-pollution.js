// SAST: prototype pollution - merging user input into object
function mergeConfig(userInput, defaultConfig) {
  for (const key in userInput) {
    defaultConfig[key] = userInput[key];
  }
  return defaultConfig;
}

function setNestedProperty(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (!(p in current)) current[p] = {};
    current = current[p];
  }
  current[parts[parts.length - 1]] = value;
  return obj;
}

module.exports = { mergeConfig, setNestedProperty };
