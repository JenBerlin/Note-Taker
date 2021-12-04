const express = require("express");
const htmlRoutes = require("./routes/html-routes");
const PORT = process.env.PORT || 3001;

const app = express();

// Without these two lines the server will not work.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Alle statischen files bitte hier aufrufen
app.use(express.static("public"));
app.use(htmlRoutes);

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
