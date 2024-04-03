const pool = require("../connection");
const { uploadToAzureBlobStorage } = require('../services/azure'); // Import your Azure Blob service



// Create Contact
module.exports.createTrack = async (req, res) => {
   if (!req.file) {
    return res.status(400).send('No files were uploaded.');
    }
  try {
    const {
      user_id,
      address,
      note,
    } = req.body;
    const imageUrl = await uploadToAzureBlobStorage(req.file);
    console.log("imageurl",imageUrl)
    const result = await pool.query(
      "INSERT INTO track (user_id, address, note, image_url, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
      [
        user_id,
        address,
        note,
        imageUrl
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

// Retrieve tracks by user_id
module.exports.getTracksByUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const result = await pool.query("SELECT * FROM track WHERE user_id = $1", [userId]);
        res.status(200).json({
            success: true,
            data: result.rows,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            error: `API Error: ${error.message}`,
        });
    }
};

// Delete a track by id
module.exports.deleteTrackById = async (req, res) => {
    const trackId = req.body.id;

    try {
        const result = await pool.query("DELETE FROM track WHERE id = $1 RETURNING *", [trackId]);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Track not found',
            });
        }

        res.status(200).json({
            success: true,
            message: "Track deleted successfully",
            deletedTrack: result.rows[0],
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            error: `API Error: ${error.message}`,
        });
    }
};
