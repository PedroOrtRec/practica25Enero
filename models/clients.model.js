const getAll = () => {
    return db.query('SELECT * FROM clients');
}

module.exports = {
    getAll
}