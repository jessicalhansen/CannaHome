const mongoose = require('mongoose');

const wateringSchema = new mongoose.Schema(
    {
        waterDate: {
            type: Date,
        },
        incNutrients: Boolean,
        plant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Plant',
        },
    }
);

const Watering = mongoose.model('Watering', wateringSchema);

module.exports = Watering;
