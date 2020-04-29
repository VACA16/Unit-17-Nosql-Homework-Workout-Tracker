const Work = require("../models/work.js");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Work.findOne({})
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Work.update({
                where: {
                    id: req.params.id
                }
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        Work.create(body)
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Work.findAll({})
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}