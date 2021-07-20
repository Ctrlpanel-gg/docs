const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use('/assets', express.static('docs/build/assets'))
app.use('/img', express.static('docs/build/img'))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "docs/build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});