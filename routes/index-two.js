const express = require('express'),
    router = express.Router();

router.get("/", (req, res) => {
    res.status(200)
        .render("template-two", {
            locals: {
                title: "Welcome!"
            },
            partials: {
                partial: "partial-index-two"
            }
        });
});

module.exports = router;