const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000

const {connection} = require("./config/db");
const {userRoute} = require("./routes/mockdata")

app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get("/greet",async(req,res)=>{
    try {
        res.send({"msg":"Welcome to the server"});
    } catch (error) {
        res.send("the server is not working")
    }
});

app.post("/data", async (req, res) => {
    try {
        const response = await fetch("https://gpt-api.richexplorer.com/api/general", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    }
});


app.use("/",userRoute);



app.listen(PORT,async()=>{
    try {
        await connection;
        console.log(`Server is connected to DB`)
    } catch (error) {
        console.log(`Not able to connect to DB`)
    }
    console.log(`The server is connected to ${PORT}`)
})
