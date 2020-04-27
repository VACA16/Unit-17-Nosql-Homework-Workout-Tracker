const Work = require("../models/work.js");

module.exports = function(app) {

    app.get("/api/workouts", function(req, res) {
        Work.findAll({}).then(function(results) {
                res.json(results);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}