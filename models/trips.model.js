const getAllTrips = () => {
    return db.query('SELECT * FROM trips')
}

const getTripById = (tripId) => {
    return db.query('SELECT * FROM trips WHERE idtrip = ?', [tripId])
}

const getTripByDepartureDate = (departureDate) => {
    return db.query('SELECT * FROM trips WHERE departureDate = ?', [departureDate])
}

const createTrip = ({ departureDate, arrivalDate, idDepartureFlight, idArrivalFlight, idHotel }) => {
    return db.query(
        'INSERT INTO trips (departureDate, arrivalDate, idDepartureFlight, idArrivalFlight, idHotel) VALUES (?, ?, ?, ?, ?)', [departureDate, arrivalDate, idDepartureFlight, idArrivalFlight, idHotel])
}

const updateTrip = (tripId, { departureDate, arrivalDate, idDepartureFlight, idArrivalFlight, idHotel }) => {
    return db.query('UPDATE trips SET departureDate = ?, arrivalDate = ?, idDepartureFlight = ?, idArrivalFlight = ?, idHotel = ? WHERE idtrip = ?', [departureDate, arrivalDate, idDepartureFlight, idArrivalFlight, idHotel, tripId])
}

const deleteTrip = (tripId) => {
    return db.query('DELETE FROM trips WHERE idtrip = ?', [tripId])
}

module.exports = { getAllTrips, getTripById, createTrip, updateTrip, deleteTrip, getTripByDepartureDate }