
import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUBMISSIONS_FILE = path.join(__dirname, "submissions.json");

// Initialize submissions file if it doesn't exist
if (!fs.existsSync(SUBMISSIONS_FILE)) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API: Save Form Submission
  app.post("/api/submissions", (req, res) => {
    try {
      const { firmName, partners, audits, mobile } = req.body;
      const newSubmission = {
        id: Date.now(),
        firmName,
        partners,
        audits,
        mobile,
        timestamp: new Date().toISOString()
      };

      const submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, "utf-8"));
      submissions.push(newSubmission);
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

      console.log("New submission received:", newSubmission);
      res.status(201).json({ success: true, message: "Submission saved successfully" });
    } catch (error) {
      console.error("Error saving submission:", error);
      res.status(500).json({ success: false, message: "Failed to save submission" });
    }
  });

  // API: Get Form Submissions (Protected by a simple key or just hidden for now)
  app.get("/api/submissions", (req, res) => {
    try {
      const submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, "utf-8"));
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch submissions" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve static files from dist
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
