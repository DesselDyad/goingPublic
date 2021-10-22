
const fs = require('fs');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            fs.readFile('./public/json/zombie.json', 'utf8', (err, data) => {
                if (err) { reject(err); }
                else {
                    zombie = JSON.parse(data);
                    resolve(zombie.zombie);
                }
            });
        })
    }
}
