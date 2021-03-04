const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
// const routes = require('./routes');

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>CannaHome</h1>')
});

// app.use('/api/v1/plants', routes.plants);
// app.use('api/v1/waterings', routes.waterings);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
