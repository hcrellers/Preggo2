const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require("express");
const path = require("path");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000


;


app.use(cors());
app.use(express.json());

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const apiRoutes = require("./routes/apiRoutes");

app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});