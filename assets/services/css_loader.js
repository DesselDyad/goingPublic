const path = require('path');
const fs = require("fs");

/**
 * @module CSS_Loader
 */
module.exports = {
    /**
     * Loads CSS sheets dynamically from a JSON file
     */
    read_css_sheets: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('./public/json/regular_styles.json', 'utf8', function (err, data) {
              if (err) reject(err);
              let obj = JSON.parse(data);
              resolve(obj.styles);
            });
        })
    }
}