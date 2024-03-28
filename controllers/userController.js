const sgMail = require("@sendgrid/mail");
const pool = require("../connection");
const jwt = require("jsonwebtoken");
const {
  hashedPassword,
  createToken,
  comparePassword,
} = require("../services/authServices");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Registration
module.exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashed = await hashedPassword(password);

    const result = await pool.query(
      "INSERT INTO users (username, password, created_at) VALUES ($1, $2, Now()) RETURNING *",
      [username, hashed]
    );

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Login
module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    const user = result.rows[0];
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = createToken({ userId: user.id });

    res.json({
      success: true,
      message: "User login successfully",
      username: user.username,
      token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Forget Password
module.exports.forget = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      email,
    ]);

    const user = result.rows[0];
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with this email does not exist" });
    }

    const token = createToken({ userId: email, expiresIn: "1h" });
    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

    const msg = {
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: "Password Reset",
      html: `
        <p>Hello,</p>
        <p>Please click on the following link to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    };

    await sgMail.send(msg);

    res.json({
      success: true,
      message: "Password reset link has been sent to your email",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Reset Password
module.exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decoded;

    const hashed = await hashedPassword(newPassword);

    const result = await pool.query(
      "UPDATE users SET password = $1 WHERE username = $2 RETURNING *",
      [hashed, userId]
    );

    if (result.rowCount === 0) {
      return res
        .status(400)
        .json({ message: "User with this email does not exist" });
    }

    res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error.message);
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: "Invalid token" });
    }
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};
