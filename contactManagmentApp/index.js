const express = require("express");
require("dotenv").config();
app = express();

const port = process.env.PORT || 3000;

let contacts = 
[
    [name = 'Sara', age = 24],
    [name = 'james', age = 17]
]



app.get("/api/contacts", (req, res) => {
    res.send(contacts)
});

app.send("/api/contacts", (req, res) => 
    {
        
    })








app.listen(port, () => {
    console.log(`listening to ${port}`)
})