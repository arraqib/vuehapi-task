const mongoose = require('mongoose');

require('../models');

mongoose.connect('mongodb://localhost/vuehapi-task', {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});