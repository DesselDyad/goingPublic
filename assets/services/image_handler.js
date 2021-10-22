const path = require('path');
const fs = require("fs");
const sharp = require('sharp');

/**
 * @module Image_Handler
 */
module.exports = {
    /**
     * Uploads a new image to the public folder and scales it
     * @param {Object} file - the image file to be uploaded
     */
    uploadUserImage: (file) => {
        return new Promise((resolve, reject) => {
            const tempPath = file.path.replace(/\s+/g, '');
            const targetPath = path.join(__dirname, "../../public/img/users/" + file.originalname.replace(/\s+/g, ''));
            if (path.extname(file.originalname).toLowerCase() === ".png" || path.extname(file.originalname).toLowerCase() === ".jpg"|| path.extname(file.originalname).toLowerCase() === ".jpeg") {
                sharp(tempPath)
                .resize(400, 250)
                .toFile(targetPath, (err, info) => {
                    if (err) reject(err);
                    fs.unlink(tempPath, err => {
                        if (err) reject(err);
                        resolve(file.originalname.replace(/\s+/g, ''));
                    })
                })

            } else {
                fs.unlink(tempPath.replace(/\s+/g, ''), err => {
                    if (err) reject(err);
                    resolve("File type not allowed!");
                });
            }
        })
    },
    /**
     * Deletes an image fron the public folder by filename
     * @param {string} fileName - the image name for the file to be deleted
     */
    deleteUserImage: (fileName) => {
        return new Promise((resolve, reject) => {
            if(fileName != "no-image.png" && fileName != undefined && fileName != null) { // this is the default image which must not be deleted, since it's not user-specific
                const targetPath = path.join(__dirname, "../../public/img/users/" + fileName);
                fs.unlink(targetPath, err => {
                    if(err) reject(err);
                    else {
                        resolve('image has been deleted successfully!');
                    }
                })
            }
            else {
                resolve();
            }
        })
    },
    uploadFishImages: files => {
        return new Promise((resolve ,reject) => {
            let output = [];
            files.forEach(file => {
                const tempPath = file.path.replace(/\s+/g, '');
                const targetPath = path.join(__dirname, "../../public/img/fish/" + file.originalname.replace(/\s+/g, ''));
                if (path.extname(file.originalname).toLowerCase() === ".png" || path.extname(file.originalname).toLowerCase() === ".jpg"|| path.extname(file.originalname).toLowerCase() === ".jpeg") {
                    sharp(tempPath)
                    .resize(400, 250)
                    .toFile(targetPath, (err, info) => {
                        if (err) reject(err);
                        fs.unlink(tempPath, err => {
                            if (err) reject(err);
                            output.push(file.originalname.replace(/\s+/g, ''));
                            if(output.length == files.length) {
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                // THIS IS A VERY DANGEROUS APPROACH, AS SOME FILES MAY HAVE AN INVALID FORMAT AND MAY BE SKIPPED, YET THEY WILL BE ADDED TO THE DB ANYWAY
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                resolve(output);
                            }
                        })
                    })
                }
            })
        })
    },
    /**
     * Deletes an image fron the public folder by filename
     * @param {string} fileName - the image name for the file to be deleted
     */
    deleteFishImages: fileNames => {
        return new Promise((resolve, reject) => {
            fileNames.forEach(fileName => {
                if(fileName != "no-image.png" && fileName != undefined && fileName != null) { // this is the default image which must not be deleted, since it's not user-specific
                    const targetPath = path.join(__dirname, "../../public/img/fish/" + fileName);
                    fs.unlink(targetPath, err => {
                        if(err) reject(err);
                        else {
                            resolve('image has been deleted successfully!');
                        }
                    })
                }
                else {
                    resolve();
                }
            })
        })
    },
    uploadFishSpeciesImages: files => {
        return new Promise((resolve ,reject) => {
            let output = [];
            files.forEach(file => {
                const tempPath = file.path.replace(/\s+/g, '');
                const targetPath = path.join(__dirname, "../../public/img/fish_species/" + file.originalname.replace(/\s+/g, ''));
                if (path.extname(file.originalname).toLowerCase() === ".png" || path.extname(file.originalname).toLowerCase() === ".jpg"|| path.extname(file.originalname).toLowerCase() === ".jpeg") {
                    sharp(tempPath)
                    .resize(400, 250)
                    .toFile(targetPath, (err, info) => {
                        if (err) reject(err);
                        fs.unlink(tempPath, err => {
                            if (err) reject(err);
                            output.push(file.originalname.replace(/\s+/g, ''));
                            if(output.length == files.length) {
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                // THIS IS A VERY DANGEROUS APPROACH, AS SOME FILES MAY HAVE AN INVALID FORMAT AND MAY BE SKIPPED, YET THEY WILL BE ADDED TO THE DB ANYWAY
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                resolve(output);
                            }
                        })
                    })
                } else {
                    return;
                }
            })
        })
    },
    /**
     * Deletes an image fron the public folder by filename
     * @param {string} fileName - the image name for the file to be deleted
     */
    deleteFishSpeciesImages: fileNames => {
        return new Promise((resolve, reject) => {
            fileNames.forEach(fileName => {
                if(fileName != "no-image.png" && fileName != undefined && fileName != null) { // this is the default image which must not be deleted, since it's not user-specific
                    const targetPath = path.join(__dirname, "../../public/img/fish_species/" + fileName);
                    fs.unlink(targetPath, err => {
                        if(err) reject(err);
                        else {
                            resolve('image has been deleted successfully!');
                        }
                    })
                }
                else {
                    resolve();
                }
            })
        })
    },
    uploadLocationImages: files => {
        return new Promise((resolve ,reject) => {
            let output = [];
            files.forEach(file => {
                const tempPath = file.path.replace(/\s+/g, '');
                const targetPath = path.join(__dirname, "../../public/img/locations/" + file.originalname.replace(/\s+/g, ''));
                if (path.extname(file.originalname).toLowerCase() === ".png" || path.extname(file.originalname).toLowerCase() === ".jpg"|| path.extname(file.originalname).toLowerCase() === ".jpeg") {
                    sharp(tempPath)
                    .resize(400, 250)
                    .toFile(targetPath, (err, info) => {
                        if (err) reject(err);
                        fs.unlink(tempPath, (err) => {
                            if (err) reject(err);
                            output.push(file.originalname.replace(/\s+/g, ''));
                            if(output.length == files.length) {
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                // THIS IS A VERY DANGEROUS APPROACH, AS SOME FILES MAY HAVE AN INVALID FORMAT AND MAY BE SKIPPED, YET THEY WILL BE ADDED TO THE DB ANYWAY
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                /////////////////////////////////////////////////////////////////////////////////////////////////////
                                resolve(output);
                            }
                        })
                    })
                }
            })
        })
    },
    /**
     * Deletes an image fron the public folder by filename
     * @param {string} fileName - the image name for the file to be deleted
     */
    deleteLocationImages: fileNames => {
        return new Promise((resolve, reject) => {
            let count = 0;
            fileNames.forEach(fileName => {
                if(fileName != "no-image.png" && fileName != undefined && fileName != null) { // this is the default image which must not be deleted, since it's not user-specific
                    const targetPath = path.join(__dirname, "../../public/img/locations/" + fileName);
                    fs.unlink(targetPath, err => {
                        if(err) reject(err);
                        if(count++ == fileNames.length) {
                            /////////////////////////////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////////////////////////////////////////////////////////////////
                            // THIS IS A VERY DANGEROUS APPROACH, AS SOME FILES MAY HAVE AN INVALID FORMAT AND MAY BE SKIPPED, YET THEY WILL BE ADDED TO THE DB ANYWAY
                            /////////////////////////////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////////////////////////////////////////////////////////////////
                            resolve();
                        }
                    })
                }
                else {
                    resolve();
                }
            })
        })
    }
} 