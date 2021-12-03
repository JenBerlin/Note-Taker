const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Alle statischen files bitte hier aufrufen
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
