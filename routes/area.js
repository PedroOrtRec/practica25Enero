const { getAllTrips, getTripByDepartureDate } = require('../models/trips.model');
const { getHotelById, getAllHotels, getHotelByName } = require('../models/hotels.model');
const { createHas } = require('../models/clients_has_trips.model');

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

// router.get('/trips/departureDate/:departureDate', async (req, res) => {
//     const { departureDate } = req.params;
//     try {
//         const [trip] = await getTripByDepartureDate(departureDate);
//         const [hotel] = await getHotelById(trip[0].idHotel);
//         trip[0].hotel = hotel[0];
//         delete trip[0].idHotel;
//         res.json(trip);
//     } catch (error) {
//         res.json({ fatal: error.message });
//     }
// });

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
    const [result] = await createHas(clientId, tripId);
    res.json(result[0])

});

module.exports = router;