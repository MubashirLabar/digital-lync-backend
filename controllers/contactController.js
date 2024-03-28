const pool = require("../connection");

// Create Contact
module.exports.createContact = async (req, res) => {
  try {
    const {
      company_name,
      contact_type,
      phone_number,
      email,
      address,
      tax_id,
      description,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO contacts (company_name, contact_type, phone_number, email, address, tax_id, description, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING *",
      [
        company_name,
        contact_type,
        phone_number,
        email,
        address,
        tax_id,
        description,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Contact created successfully.",
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

// Get All Contacts
module.exports.getAllContacts = async (_, res) => {
  try {
    pool.query(`Select * from contacts`, (err, result) => {
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
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};
