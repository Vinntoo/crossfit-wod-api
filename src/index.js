// In src/index.js
const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

//for testing purposes
app.get("/", (req, res) => {
    res.send("<h2>It's working!</h2>");
});


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

