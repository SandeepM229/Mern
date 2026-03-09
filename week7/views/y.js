const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.post("/admin", (req, res) => {
    res.send("Admin Page")
})

app.put("/admin/:id", (req, res) => {
    const id = req.params.id
    res.send(`Data updated ${id}`)
})

app.delete("/admin/:id", (req, res) => {
    const id = req.params.id
    res.send(`Data deleted ${id}`)
})

app.get("/*splat", (req, res) => {
    res.end("Page not found")
})

app.listen(3001, () => {
    console.log("Server listening on port 3000")
})
