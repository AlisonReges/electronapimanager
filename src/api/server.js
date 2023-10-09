const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        mensagem: "Olá Mundo!"
    })
});

app.post("/teste", (req, res) => {
    const test = req.body.test;
    console.log(test);
    return res.status(200).json({
        mensagem: "otarianos"
    });
})

app.listen(3000, () => {
    console.log("localhost:3000")
})

module.exports = app;