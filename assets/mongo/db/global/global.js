var Global = require('../../../models/global/global');
var User = require('../../../models/global/user');

/**
 * @module Global
 */
module.exports = {
    /**
     * gets global data (do i even use this?)
     */
    getAll: () => {
		return new Promise((resolve, reject) => {
			Global.find((err, global) => {
				if(err) reject(err);
				resolve(global);
			})
		})
    },
    update: ip => {
        return new Promise((resolve, reject) => {
            Global.find({
                'unique_ips': ip.toString()
            })
                .exec()
                .then(globals => {
                    if(globals.length == 0) {
                        let newGlobal = new Global({
                            unique_ips: [ip],
                            total_hits: 1
                        })
                        newGlobal.save((err, res) => {
                            if(err) reject(err);
                            resolve(res);
                        })
                    } else {
                        Global.updateMany(
                            {},
                            {
                                $inc: {
                                'total_hits': 1
                            }
                        },
                        (err, result) => {
                            if(err) reject(err);
                            Global.find((err, global) => {
                                if(err) reject(err);
                                // User.find({})
                                resolve(global);
                            })
                        })}
                })
                .catch(e => {
                    reject(e);
                })
        })
    }
}