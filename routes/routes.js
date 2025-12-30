const express = require("express");
const quotes = require("../quotes.json");

const router = express.Router();

router
    .get("/", (req, res) => {
        //Generate a random quote for the user
        try {
            let id = Math.floor(1 + Math.random() * quotes.length);
            const quote = quotes.find((value, index) => value._id == id);
            res.json(quote);
        }
        catch (err) {
            res.status(400);
            res.json({
                msg: "Could not Find Quotes",
            });
        }
    })
    .post("/",(req,res)=>{
        //Get the quotes by author
        const body=req.body;
        try {
            const quote = quotes.filter((value, index) => value.author.toLowerCase().startsWith(body.author.toLowerCase()));
            if(quote.length==0)
            {
                throw new Error("Not Quotes found");
            }
            res.json(quote);
        }
        catch (err) {
            res.status(404);
            res.json({
                msg: "Quotes of this author not found",
            });
        }
    })
module.exports = router;