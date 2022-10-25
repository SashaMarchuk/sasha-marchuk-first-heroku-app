const express = require('express');
const app = express();

if (process.env.LE_URL && process.env.LE_CONTENT) {
  app.get(process.env.LE_URL, function(req, res) {
    return res.send(process.env.LE_CONTENT)
  });
}