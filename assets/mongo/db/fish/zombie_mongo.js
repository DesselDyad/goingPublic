const ZombieMovie = require('../../models/zombie_movie');

module.exports = {
    processMovies: obj => {
        return new Promise((resolve, reject) => {
            let newMovie = new ZombieMovie({
                title: obj.name,
                director: obj.director,
                year: obj.year,
                notes: obj.notes
            })
            newMovie.save(newMovie, (err, res) => {
                if(err) reject(err);
                resolve('success');
            })
        })
    },
    getMovies: () => {
        return new Promise((resolve, reject) => {
            ZombieMovie.find({})
            .exec()
            .then(movies => {
                resolve(movies);
            })
            .catch(e => {
                reject(e);
            })
        })
    }
}