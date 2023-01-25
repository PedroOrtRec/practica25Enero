const { getAllTrips, getTripById } = require('../models/trips.model');
const { getHotelById, getAllHotels, getHotelByName } = require('../models/hotels.model');
const { createHas } = require('../models/clients_has_trips.model');
const { getClientById } = require('../models/clients.model');

const router = require('express').Router();

router.get('/trips', async (req, res) => {
    try {
        const [trips] = await getAllTrips();
        for (let trip of trips) {
            const [hotel] = await getHotelById(trip.idHotel);
            trip.hotel = hotel[0];
            delete trip.idHotel;
        }
        res.json(trips);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/hotels', async (req, res) => {
    try {
        const [hotels] = await getAllHotels();
        res.json(hotels);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/hotels/:hotelName', async (req, res) => {
    const { hotelName } = req.params;
    try {
        const [hotel] = await getHotelByName(hotelName);
        res.json(hotel[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.post('/add/:clientId/:tripId', async (req, res) => {
    const { clientId, tripId } = req.params;
    try {
        const [result] = await createHas({ clientId, tripId });
        const [client] = await getClientById(clientId);
        const [trip] = await getTripById(tripId);
        const register = { client, trip }
        res.json(register)
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;