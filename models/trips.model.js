const getAllTrips = () => {
    return db.query('SELECT * FROM trips');
}

module.exports = { getAllTrips }