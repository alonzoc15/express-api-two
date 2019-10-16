const express = require("express"),
    router = express.Router();

router.get("/", (req, res) => {
    const { name } = req.query;
    let snippet = `<h1>Hello ${name}</h1>`;

    if (!name) {
        snippet = `<h1>NO NAME PROVIDED</h1>`;
        res.status(500)
            .send(snippet)
            .end();
    }

    res.status(200)
        .send(snippet)
        .end();
});

module.exports = router;