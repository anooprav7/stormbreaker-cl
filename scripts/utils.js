const { readdirSync } = require('fs');

module.exports = {
    getDirectories: function getDirectories(source) {
        return readdirSync(source, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
    },
};
