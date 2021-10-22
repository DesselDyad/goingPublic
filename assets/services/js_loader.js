const path = require('path');
const fs = require("fs");

/**
 * @module JS_Loader
 */
module.exports = {
    /**
     * Loads CSS sheets dynamically from a JSON file
     */
    read_scripts: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('./public/json/scripts.json', 'utf8', function (err, data) {
              if (err) reject(err);
              let obj = JSON.parse(data);
              resolve(obj.scripts);
            });
        })
    }
}