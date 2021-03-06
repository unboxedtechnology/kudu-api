var fs = require("fs");

module.exports = function dump(request) {
    return {
        download: function download(dest, cb) {
            request("/api/dump", function(err, response) {
                cb(err, response);
            }).pipe(fs.createWriteStream(dest));
        }
    }
};
