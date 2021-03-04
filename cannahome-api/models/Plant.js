const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema(
    {
        plantName: {
            type: String,
            required: true,
            trim: true,
        },
        plantType: String,
        plantStrain: String,
        propagationType: String,
        growStage: String, 
        lightCycle: String,
        plantingDate: Date,
        notes: [{
            type: String,
            max: 500,
            trim: true,
        }] ,
        waterings: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Watering',
        }]
    }
)

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
