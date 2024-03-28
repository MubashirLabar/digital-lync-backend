const sgMail = require("@sendgrid/mail");
const pool = require("../connection");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create Task
module.exports.createTask = async (req, res) => {
  try {
    const { individual, due_date, name, assign_to } = req.body;

    const result = await pool.query(
      "INSERT INTO tasks (individual, due_date, name, assign_to, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
      [individual, due_date, name, assign_to]
    );

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Get All Tasks
module.exports.getAllTasks = async (_, res) => {
  try {
    pool.query(`SELECT * FROM tasks`, (err, result) => {
      if (!err) {
        res.status(201).json({
          success: true,
          data: result.rows,
        });
      } else {
        res.status(500).json({
          success: false,
          error: err,
        });
      }
    });
    pool.end;
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Create Event
module.exports.createEvent = async (req, res) => {
  try {
    const { subject, start_date, end_date, start_time, end_time } = req.body;

    const result = await pool.query(
      "INSERT INTO events (subject, start_date, end_date, start_time, end_time, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
      [subject, start_date, end_date, start_time, end_time]
    );
    res.status(201).json({
      success: true,
      message: "Event created successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get All Events
module.exports.getAllEvents = async (_, res) => {
  try {
    pool.query("SELECT * FROM events", (err, result) => {
      if (!err) {
        res.status(201).json({
          success: true,
          data: result.rows,
        });
      } else {
        res.status(500).json({
          success: false,
          error: err,
        });
      }
    });
    pool.end;
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Create Email
module.exports.createEmail = async (req, res) => {
  try {
    const { from, to, bcc, subject, detail } = req.body;
    const result = await pool.query(
      "INSERT INTO emails (sender, recipient, bcc, subject, detail, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
      [from, to, bcc, subject, detail]
    );

    const msg = {
      to: to,
      from: process.env.SENDER_EMAIL,
      bcc: bcc,
      subject: subject,
      html: `
        <p>Subject: ${subject}</p>
        <p>Message: ${detail}</p>
      `,
    };

    await sgMail.send(msg);

    res.status(201).json({
      success: true,
      message: "Email created successfully and sent.",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Get All Emails
module.exports.getAllEmails = async (req, res) => {
  try {
    pool.query("SELECT * FROM emails", (err, result) => {
      if (!err) {
        res.status(200).json({
          success: true,
          data: result.rows,
        });
      } else {
        res.status(500).json({
          success: false,
          error: err,
        });
      }
    });
    pool.end;
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};
