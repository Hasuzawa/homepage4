import express from "express"
import "dotenv"


const PORT = process.env.PORT ?? 5000
const HOST = process.env.HOST ?? "0.0.0.0"

const app = express()
app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(PORT)
console.log(`node.js server running on ${HOST}:${PORT}`)