const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Registration
app.post("/register", (req, res) => {

    const { fullname, email, phone, password } = req.body;

    res.render("success", {
        fullname,
        email,
        phone
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});