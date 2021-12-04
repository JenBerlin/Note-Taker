const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

module.exports = router;
