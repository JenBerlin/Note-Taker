const express = require("express");
const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");
const PORT = process.env.PORT || 3001;

const app = express();

// Without these two lines the server will not work.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Alle statischen files bitte hier aufrufen
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
