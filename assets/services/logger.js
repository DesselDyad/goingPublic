const fs = require('fs');

module.exports = {
    'log' : (text) => {
        let date = new Date;
        fs.readFile('./assets/logging/log.txt', "utf8", (err, data) => {
            data = (data == undefined ? '' : data);
            fs.writeFile('./assets/logging/log.txt', 
            'day = ' + date.getDate() + ' '  + 'month = ' + (date.getMonth() + 1)  + ' '  + 'year = ' + date.getFullYear() + ' '  + '\r\n'
            + 'hours = '  +  date.getHours() + ' '  + 'minutes = ' + date.getMinutes() + ' '  + 'seconds = ' + date.getSeconds() + ' '  + '\r\n' + text + '\r\n'
             + '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'  + '\r\n' + data, (err) => {
                if(err) {
                    console.log(err);
                }
            })
        })
    },

    'createFile' : (file, input = '') => {
        fs.stat(file, (err, stats) => {
            if (stats == undefined) {
                fs.writeFile(file, input, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        log(input);
                    }
                })
            }
            else {
            }
        })
    },
    
    'appendToFile' : (file, input = '') => {
        fs.stat(file, (err, stats) => {
            if (stats != undefined) {
                fs.appendFile(file, input, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        log(input);
                    }
                })
            }
            else {
            }
        })
    },
    
    'openFile' : (file) => {
        fs.stat(file, (err, stats) => {
            if (stats != undefined) {
                fs.readFile(file, "utf8", (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        log("file read = " + file);
                        log(data);
                    }
                })
            }
            else {
            }
        })
    },
    
    'readFile' : (file) => {
        fs.stat(file, (err, stats) => {
            if (stats != undefined) {
                fs.readFile(file, "utf8", (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        log("file read = " + file);
                        log(data);
                    }
                })
            }
            else {
            }
        })
    },
    
    'renameFile' : (file, newName) => {
        fs.stat(file, (err, stats) => {
            if (stats != undefined) {
                fs.rename(file, newName);
                log(file + " filename changed to " + newName);
            }
            else {
            }
        })
    },
    
    'deleteFile' : (file) => {
        fs.stat(file, (err, stats) => {
            if (stats != undefined) {
                log("file deleted = " + file);
                fs.unlink(file);
            }
            else {
            }
        })
    },
    
    'createDir' : (dir) => {
        fs.stat(dir, (err, stats) => {
            if (stats == undefined) {
                log("dir created =" + dir);
                fs.mkdir(dir);
            }
            else {
            }
        })
    },
    
    'readDir' : (dir) => {
        fs.readdir(dir, (err, files) => {
            log("directory read = " + dir);
            files.forEach((element) => {
            })
        });
    },
    
    'deleteDir' : (dir) => {
        fs.stat(dir, (err, stats) => {
            log("directory deleted = " + dir);
            if (stats != undefined) {
                fs.rmdir(dir);
            }
            else {
            }
        })
    }
}