'use strict';

const fs = require('fs')

function read(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) { return reject(err) }
			resolve(data)
		})
	})
}

function write(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', (err) => {
            if (err) { return reject(err) }
            resolve()
        })
    })
}

module.exports = {
    read: read,
    write: write
}
