const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    const user = req.query.name || "demo"
    const marks = req.query.marks || 60
    res.render("x", { name: user, marks: marks })
})

app.listen(3002, () => {
    console.log("Server listening on port 3002")
})
