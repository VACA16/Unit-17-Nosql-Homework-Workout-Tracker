const Workout = require("../models/work.js");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.params);
        Workout.findByIdAndUpdate(
                req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWork => {
                res.json(dbWork);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}