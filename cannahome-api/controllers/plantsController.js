const db = require('../models');

const index = (req, res) => {
    db.Plant.find({}, (err, allPlants) => {
        if (err) return console.log(err);
        return res.json(allPlants);
    });
};

const show = (req, res) => {
    db.Plant.findById(req.params.id, (err, foundPlant) => {
        if (err) return console.log(err);
        return res.json(foundPlant);
    });
};

const create = (req, res) => {
    console.log(req.body);
    db.Plant.create(req.body, (err, newPlant) => {
        if (err) return console.log(err);
        return res.json(newPlant);
    });
};

const update = (req, res) => {
    console.log('Plant to update ID = ', req.params.id);
    console.log('Data to update Plant = ', req.body);

    db.Plant.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedPlant) => {
            if (err) return console.log(err);
            return res.json(updatedPlant);
        }
    );
};

const destroy = (req, res) => {
    console.log(req.params.id);

    db.Plant.findByIdAndDelete(req.params.id, (err, deletedPlant) => {
        if (err) return console.log(err);

        return res.json(deletedPlant)
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
