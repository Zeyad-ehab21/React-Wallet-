import express from "express"
import dotenv from "dotenv"


dotenv.config();


const app = express()

const PORT = process.env.PORT || 5001;




app.get("/", (req, res) =>{
res.send("It's Working ")
})

console.log("My port:" , process.env.PORT)


app.listen(PORT, () =>{
    console.log("Server is running")
})
