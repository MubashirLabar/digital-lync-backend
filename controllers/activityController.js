const sgMail = require("@sendgrid/mail");
const pool = require("../connection");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create Task
module.exports.createTask = async (req, res) => {
  try {
    const { subject, due_date, priority, owner_id } = req.body;

    const result = await pool.query(
      "INSERT INTO tasks (subject, due_date, priority, owner_id, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
      [subject, due_date, priority, owner_id]
    );

    res.status(200).json({
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
    const query = `
      SELECT tasks.*, users.id AS owner_id, users.username AS owner_username, users.name AS owner_name, users.phone AS owner_phone
      FROM tasks 
      INNER JOIN users ON tasks.owner_id = users.id
      ORDER BY tasks.id ASC
    `;
    pool.query(query, (err, result) => {
      if (!err) {
        const tasks = result.rows.map((task) => {
          // Remove duplicated from task and replace it with owner details
          const { owner_id, owner_phone, owner_name, owner_username, ...rest } =
            task;
          return {
            ...rest,
            owner: {
              id: owner_id,
              username: task.owner_username,
              name: task.owner_name,
              phone: task.owner_phone,
            },
          };
        });
        res.status(200).json({
          success: true,
          data: tasks,
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

// Get Single Contact Detail
module.exports.getTaskDetail = async (req, res) => {
  const id = req?.params?.id;

  if (id === ":id") {
    return res.status(404).json({
      success: false,
      error: "Task id is required.",
    });
  }

  try {
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Task detail fetched successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Update Task
module.exports.updateTask = async (req, res) => {
  try {
    const { id, subject, due_date, priority, owner_id } = req.body;

    const result = await pool.query(
      "UPDATE tasks SET subject = $1, due_date = $2, priority = $3, owner_id = $4 WHERE id = $5 RETURNING *",
      [subject, due_date, priority, owner_id, id]
    );

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Task not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Task updated successfully.",
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

// Delete Task
module.exports.deleteTasks = async (req, res) => {
  try {
    const { ids } = req.body;

    const placeholders = ids.map((id, index) => `$${index + 1}`).join(",");

    const result = await pool.query(
      `DELETE FROM tasks WHERE id IN (${placeholders}) RETURNING *`,
      ids
    );

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Task not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tasks deleted successfully.",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Create Meeting
module.exports.createMeeting = async (req, res) => {
  try {
    const { name, location, from_date, to_date, host, participants } = req.body;

    const result = await pool.query(
      "INSERT INTO meetings (name, location, from_date, to_date, host, participants, created_at) VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *",
      [name, location, from_date, to_date, host, participants]
    );

    const response = {
      ...result.rows[0],
      participants: participants,
    };

    res.status(200).json({
      success: true,
      message: "Meeting created successfully.",
      data: response,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get All Meetings
module.exports.getAllMeetings = async (_, res) => {
  try {
    pool.query("SELECT * FROM meetings", (err, result) => {
      if (!err) {
        const meetings = result.rows.map((row) => {
          return {
            ...row,
            participants: JSON.parse(row.participants),
          };
        });

        res.status(200).json({
          success: true,
          data: meetings,
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

// Get Single Meeting Detail
module.exports.getMeetingDetail = async (req, res) => {
  const id = req?.params?.id;

  if (id === ":id") {
    return res.status(404).json({
      success: false,
      error: "Meeting id is required.",
    });
  }

  try {
    const result = await pool.query("SELECT * FROM meetings WHERE id = $1", [
      id,
    ]);

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Meeting data not found.",
      });
    }

    const response = {
      ...result.rows[0],
      participants: JSON.parse(result.rows[0].participants),
    };

    res.status(200).json({
      success: true,
      message: "Meeting detail fetched successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Update Meeting
module.exports.updateMeeting = async (req, res) => {
  try {
    const { id, name, location, from_date, to_date, host, participants } =
      req.body;

    const result = await pool.query(
      "UPDATE meetings SET name = $1, location = $2, from_date = $3, to_date = $4, host = $5, participants = $6 WHERE id = $7 RETURNING *",
      [name, location, from_date, to_date, host, participants, id]
    );

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Meeting not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Meeting updated successfully.",
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Meetings
module.exports.deleteMeetings = async (req, res) => {
  try {
    const { ids } = req.body;

    const placeholders = ids.map((id, index) => `$${index + 1}`).join(",");

    const result = await pool.query(
      `DELETE FROM meetings WHERE id IN (${placeholders}) RETURNING *`,
      ids
    );

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Meeting not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Meeting deleted successfully.",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: error.message,
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

    res.status(200).json({
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

// Get Single Email Detail
module.exports.getEmailDetail = async (req, res) => {
  const id = req?.params?.id;

  if (id === ":id") {
    return res.status(404).json({
      success: false,
      error: "Email id is required.",
    });
  }

  try {
    const result = await pool.query("SELECT * FROM emails WHERE id = $1", [id]);

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Email data not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Email detail fetched successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Update Email
module.exports.deleteEmails = async (req, res) => {
  try {
    {
      const { ids } = req.body;

      const placeholders = ids.map((id, index) => `$${index + 1}`).join(",");

      const result = await pool.query(
        `DELETE FROM emails WHERE id IN (${placeholders}) RETURNING *`,
        ids
      );

      if (result.rows?.length === 0) {
        return res.status(404).json({
          success: false,
          error: "Email not found.",
        });
      }
      res.status(200).json({
        success: true,
        message: "Email deleted successfully.",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
