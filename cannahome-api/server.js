require('dotenv').config();
require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.send('<h1>CannaHome</h1>')
});

app.use('/api/v1/plants', routes.plants);
app.use('api/v1/waterings', routes.waterings);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
