const pool = require("../connection");

// Create Contact
module.exports.createContact = async (req, res) => {
  try {
    const {
      company_name,
      person_name,
      contact_type,
      phone_number,
      email,
      address,
      tax_id,
      description,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO contacts (company_name, person_name, contact_type, phone_number, email, address, tax_id, description, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW()) RETURNING *",
      [
        company_name,
        person_name,
        contact_type,
        phone_number,
        email,
        address,
        tax_id,
        description,
      ]
    );

    res.status(200).json({
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

// Update Contact
module.exports.updateContact = async (req, res) => {
  try {
    const {
      id,
      company_name,
      person_name,
      contact_type,
      phone_number,
      email,
      address,
      tax_id,
      description,
    } = req.body;

    const result = await pool.query(
      "UPDATE contacts SET company_name = $1, person_name = $2, contact_type = $3, phone_number = $4, email = $5, address = $6, tax_id = $7, description = $8 WHERE id = $9 RETURNING *",
      [
        company_name,
        person_name,
        contact_type,
        phone_number,
        email,
        address,
        tax_id,
        description,
        id,
      ]
    );

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Contact not found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Contact updated successfully.",
      data: result.rows[0],
    });
  } catch (error) {
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

// Get Single Contact Detail
module.exports.getContactDetail = async (req, res) => {
  const id = req?.params?.id;

  if (id === ":id") {
    return res.status(404).json({
      success: false,
      error: "Contact id is required.",
    });
  }

  try {
    const result = await pool.query("SELECT * FROM contacts WHERE id = $1", [
      id,
    ]);

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Contact not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact detail fetched successfully",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};

// Delete Contacts
module.exports.deleteContacts = async (req, res) => {
  try {
    const { ids } = req.body;

    const placeholders = ids.map((id, index) => `$${index + 1}`).join(",");

    const result = await pool.query(
      `DELETE FROM contacts WHERE id IN (${placeholders}) RETURNING *`,
      ids
    );

    if (result.rows?.length === 0) {
      return res.status(404).json({
        success: false,
        error: "Contacts not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contacts deleted successfully.",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      error: `API Error: ${error.message}`,
    });
  }
};
