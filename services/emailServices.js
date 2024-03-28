const nodemailer = require("nodemailer");

// Function to send verification email
async function sendVerificationEmail(email, verificationToken) {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Provide your email service details here
    service: "gmail",
    auth: {
      user: "your-email@gmail.com", // Your email address
      pass: "your-password", // Your email password
    },
  });

  // Email content
  const mailOptions = {
    from: "your-email@gmail.com", // Sender address
    to: email, // Recipient address
    subject: "Email Verification", // Subject line
    html: `<p>Please click <a href="http://yourwebsite.com/verify/${verificationToken}">here</a> to verify your email.</p>`, // Email body with verification token link
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully.");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Error sending verification email.");
  }
}

module.exports = { sendVerificationEmail };
