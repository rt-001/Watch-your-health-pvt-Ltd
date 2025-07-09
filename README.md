# 📄 Assessment Management System

A full-stack web app to generate dynamic, configurable PDF reports from pre-existing assessment data using a flexible configuration engine.

---

## ⚙️ Features

- 🔐 User login & signup (JWT-based)
- 🧠 Configuration-driven PDF formatting
- 📄 Puppeteer-powered PDF generation from EJS templates
- 💾 Saves report locally and provides a link to view/download
- 🧩 Add new assessment types via config (no backend code changes!)

---

## 🌐 Port Configuration

| Layer     | Description            | Port        |
|-----------|------------------------|-------------|
| Backend   | Node.js + Express API  | `localhost:4000` |
| Frontend  | React.js Client        | `localhost:3000` |

Frontend requests are proxied to backend using:

```json
"proxy": "http://localhost:4000"
```


