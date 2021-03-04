const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully.'))
    .catch((err) => console.log(err));

    module.exports = {
        Plant: require('./Plant'),
        Watering: require('./Watering'),
    };
