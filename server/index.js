
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();
const app = express();
const port = 5000;
const GOOGLE_GEMINI_API_KEY = "AIzaSyD3UvUSdQ_C2Kn17neV4J9XPxJH3Kw_tQs"


const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_API_KEY);
const upload = multer({ dest: "uploads/" });
app.post("/analyze-resume", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const pdfBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(pdfBuffer);
    const textContent = pdfData.text;

    const prompt = `
Analyze the following resume and provide:
- Key Skills
- Summary of Experience
- Suggested Job Roles
- Suggestions for Improvement

Resume:
${textContent}
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const analysis = result.response.text();

    fs.unlinkSync(req.file.path); 

    res.json({ analysis });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Failed to analyze resume" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
