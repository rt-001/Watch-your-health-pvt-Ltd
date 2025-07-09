const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve the generated PDF folder as a public URL
app.use("/reports", express.static(path.join(__dirname, "generated-reports")));

// ✅ Create folder to store generated PDFs if not exists
const reportsDir = path.join(__dirname, "generated-reports");
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);

// ✅ Attach routes
app.use("/api/auth", authRoutes);
app.use("/api/report", reportRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
