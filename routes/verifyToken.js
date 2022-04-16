const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) res.status(403).json({ msg: "Token in Not valid!" });
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ msg: " attention you Not Authenticated " });
  }
};

const verifyTokenAndAuthorizatiion = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.userid || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You  are Not alowes to do that ");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You  are Not alowes to do that !");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorizatiion,
  verifyTokenAndAdmin,
};