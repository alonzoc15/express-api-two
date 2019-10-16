const express = require('express'),
    router = express.Router();

const data = {
    sportsTeams: [
        { name: 'Giants', league: 'NFL' },
        { name: 'Knicks', league: 'NBA' },
        { name: 'Yankees', league: 'MLB' },
        { name: 'Rangers', league: 'NHL' }
    ]
};

router.get("/", (req, res) => {
    res.status(200).render("template-two", {
        locals: {
            title: "A listing of the best teams!",
            arrayOfData: data.sportsTeams
        },
        partials: {
            partial: "partial-all-two"
        }
    });
});

module.exports = router;