const pool = require("../connection");
const {
  hashedPassword,
  createToken,
  comparePassword,
} = require("../services/authServices");

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
