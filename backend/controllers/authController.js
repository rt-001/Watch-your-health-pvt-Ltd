const jwt = require("jsonwebtoken");
const users = []; // In-memory store

exports.signup = (req, res) => {
  const { username, password } = req.body;
  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  users.push({ username, password });
  res.status(201).json({ message: "Signup successful" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ username }, "secret", { expiresIn: "1h" });
  res.json({ token });
};
