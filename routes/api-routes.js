const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

router.get("/api/notes", (req, res) => {
  // utf8 format because this is a html format
  fs.readFile("db/db.json", "utf8", (err, data) => {
    //   This is different to console.log error
    if (err) {
      console.log(err);
    } else {
      console.log("api");
      return res.json(JSON.parse(data));
    }
  });
});

router.post("/api/notes", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const noteDb = JSON.parse(data);
    const newNote = req.body;
    const noteId = uniqid();
    const id = "id";
    newNote[id] = noteId;
    noteDb.push(newNote);
    // upper code = when you have all this information then you need to write it = lower code
    fs.writeFile("db/db.json", JSON.stringify(noteDb), (err) => {
      if (err) throw err;
      res.json(noteDb);
    });
  });
});

router.delete("/api/notes/:id", (req, res) => {
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const getId = req.params.id;
    const noteDb = JSON.parse(data);
    for (let i = 0; i < noteDb.length; i++) {
      if (getId === noteDb[i].id) {
        noteDb.splice([i], 1);
        fs.writeFile("db/db.json", JSON.stringify(noteDb), (err) => {
          if (err) throw err;
          res.json(noteDb);
        });
      }
    }
  });
});

module.exports = router;
