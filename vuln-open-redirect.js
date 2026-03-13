// SAST: open redirect - user-controlled redirect URL
function redirect(res, userUrl) {
  res.redirect(302, userUrl);
}

function redirectFromQuery(req, res) {
  const url = req.query.returnTo || req.query.redirect || req.query.next;
  res.redirect(url);
}

module.exports = { redirect, redirectFromQuery };
