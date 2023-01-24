const { getHotelById } = require('../../models/hotels.model');
const { getAllTrips } = require('../../models/trips.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [trips] = await getAllTrips();
        for (let trip of trips) {
            const [hotel] = await getHotelById(trip.idHotel);
            trip.hotel = hotel[0];
            delete trip.idHotel
        }
        res.json(trips);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


module.exports = router;