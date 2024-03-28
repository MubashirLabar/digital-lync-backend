const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

module.exports.comparePassword = async (password, dbPassword) => {
  return await bcrypt.compare(password, dbPassword);
};

module.exports.createToken = (user, expiresIn = "7d") => {
  return jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
};

module.exports.verifyToken = (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (headerToken) {
    const token = headerToken.split("Bearer ")[1];
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      next();
    } else {
      return res
        .status(401)
        .json({ errors: [{ msg: "Please add a valid token" }] });
    }
  } else {
    return res.status(401).json({ errors: [{ msg: "Please add a token" }] });
  }
};
