const createHas = ({ clientId, tripId }) => {
    return db.query('INSERT INTO clients_has_trips (idClient, idTrip) VALUES (?, ?)', [clientId, tripId])
}

module.exports = { createHas }