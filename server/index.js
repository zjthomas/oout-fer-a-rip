const express = require('express');
const path = require('path');
const { Location } = require('../database/models');

const app = express();
const port = 3000;

app.use('/:location', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.end();
});

app.get('/:location/location', (req, res) => {
  Location.find({ location: req.params.location })
    .then((data) => res.send(JSON.stringify(data[0])))
    .catch((err) => {
      console.log(err);
      res.status(500).send(JSON.stringify(err));
    });
});


app.listen(port, () => console.log(`App now listening at port ${port}`));
