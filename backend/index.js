const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/",(req,res) => {
    res.send("server Initial page");
});

app.get("/data",(req,res) => {
    res.json({
    products: ["product 1", "product 2", "product 3" , "product 4"],
    });
})

const port = 8000;
app.listen(port, () => console.log("server is running at port 8000"));