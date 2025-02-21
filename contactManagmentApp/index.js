const express = require("express");
require("dotenv").config();
app = express();

const port = process.env.PORT || 3000;






app.get("/api/contacts", (req, res) => {
    res.send("Get all contact")
});








app.listen(port, () => {
    console.log(`listening to ${port}`)
})