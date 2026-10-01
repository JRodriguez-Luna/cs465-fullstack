const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  const q = await Model.find({}).exec();
  // console.log(q);

  if (!q) {
    // Databse returned no data
    return res.status(404).json(err);
  } else {
    // Return resulting trip list
    return res.status(200).json(q);
  }
};

// GET: /trips/:tripCode - Lists a single trip
const tripsFindByCode = async (req, res) => {
  const q = await Model
    .find({ code: req.params.tripCode })
    .exec();
  // console.log(q);

  if (!q) {
    // Databse returned no data
    return res.status(404).json(err);
  } else {
    // Return resulting trip list
    return res.status(200).json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
