const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'temp'),
        filename: function(req, res, callback) {
            callback(null, "temp");
        }
    })
};