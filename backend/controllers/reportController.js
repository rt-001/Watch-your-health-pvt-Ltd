const data = require("../data/data");
const config = require("../config/assessment-config");
const { getValueFromPath } = require("../utils/mapper");
const { generatePDF } = require("../utils/pdfGenerator");
const path = require("path");

exports.generateReport = async (req, res) => {
  try {
    const { session_id } = req.body;
    const record = data.find((r) => r.session_id === session_id);
    if (!record) {
      return res.status(404).json({ message: "Session not found" });
    }

    const conf = config[record.assessment_id];
    if (!conf) {
      return res.status(400).json({ message: "Invalid assessment_id" });
    }
    const extracted = {};
    for (const [field, pathStr] of Object.entries(conf.mappings)) {
      extracted[field] = getValueFromPath(record, pathStr);
    }

    if (conf.classification?.bmi && extracted.bmi) {
      const val = parseFloat(extracted.bmi);
      const match = conf.classification.bmi.find(
        (r) => val >= r.range[0] && val <= r.range[1]
      );
      if (match) {
        extracted.bmi += ` (${match.label})`;
      }
    }

    const fileName = `${session_id}.pdf`;
    const outputPath = path.join(__dirname, "../generated-reports", fileName);

    await generatePDF({
      title: `${record.assessment_id} Report`,
      data: extracted,
      outputPath,
    });
    res.json({ path: `/reports/${fileName}` });
  } catch (err) {
    console.error("PDF generation failed:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
