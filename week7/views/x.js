console.log("Server is starting...")

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.end("Home Page")
})

app.get("/about", (req, res) => {
    res.end("About Page")
})

app.get("/contact", (req, res) => {
    res.end("Contact Page")
})

app.get("/*splat", (req, res) => {
    res.end("Page not found")
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})
