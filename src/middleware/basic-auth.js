const { API_TOKEN } = require("../config");

function validateBasicAuthToken(err, req, res, next) {
  const authToken = req.headers["Authorization"].split("-").join("");
  if (authToken !== `Bearer ${API_TOKEN}`) {
    console.error("auth error", err ?? err);
    res.status(401).send("Unauthorized Request");
  }
  next(err);
}

module.export = validateBasicAuthToken;
