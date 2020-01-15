const mongoose = require('mongoose');
const URI = 'mongodb://localhost/MEAN-HOME_SERVICE';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.log(err));

module.exports = mongoose;