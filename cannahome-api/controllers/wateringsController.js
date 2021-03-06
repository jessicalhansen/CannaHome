const db = require('../models');

const index = (req, res) => {
    db.Watering.find({ plantId: req.params.plantId }, (err, allWaterings) => {
        if (err) return console.log(err);
        return res.json(allWaterings);
    });
};

const show = (req, res) => {
    db.Watering.findById(req.params.id, (err, foundWatering) => {
        if (err) return console.log(err);
        return res.json(foundWatering);
    });
};

const create = (req, res) => {
    console.log(req.body);
    
    db.Watering.create(req.body, (err, newWatering) => {
        if (err) return console.log(err);
        db.Plant.findByIdAndUpdate(
            req.body.plant,
            {
                $push: {waterings: newWatering._id}
            },
            {new: true},
            ((err, updatedPlant) => {
                if (err) return console.log(err);
                return res.json(newWatering);
            })
        )
    });
};

const update = (req, res) => {
    db.Watering.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedWatering) => {
            if (err) return console.log(err);
            return res.json(updatedWatering);
        }
    );
};

const destroy = (res, req) => {
    db.Watering.findByIdAndDelete(req.params.id, (err, deletedWatering) => {
        if (err) return console.log(err);
        return res.json(deletedWatering);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
