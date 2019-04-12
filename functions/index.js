const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/api/whoami", (req, res) => {
  res.json({
    ip: req.ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
