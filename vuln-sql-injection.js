// SAST: SQL injection - concatenating user input into query
function getUserById(userId) {
  const query = 'SELECT * FROM users WHERE id = ' + userId;
  return query;
}

function searchUsers(username) {
  return "SELECT * FROM users WHERE name = '" + username + "'";
}

function orderBy(userOrder) {
  return 'SELECT * FROM users ORDER BY ' + userOrder;
}

module.exports = { getUserById, searchUsers, orderBy };
