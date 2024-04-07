const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const pool = require("./connection");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");
const activityRoutes = require("./routes/activityRoutes");
const trackingRoutes = require("./routes/trackingRoutes");
const { swaggerDocs } = require("./utils/swagger");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on at http://localhost:${port}`);
});

pool.connect().then((res) => console.log("postgres connection established"));

app.get("/", (_, res) => {
  res.send("Digital Lync Project is Running...");
});

// Routes
app.use("/api", userRoutes);
app.use("/api", contactRoutes);
app.use("/api", activityRoutes);
app.use("/api", trackingRoutes);

swaggerDocs(app, port);
