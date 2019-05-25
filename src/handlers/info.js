const db = require('../db/models');

module.exports = (info) => {
    info.accept();
    // info.reject(404, 'repository not found');
};
