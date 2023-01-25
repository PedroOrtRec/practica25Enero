const { getHotelById } = require('../../models/hotels.model');
const { getAllTrips, getTripById, createTrip, updateTrip, deleteTrip } = require('../../models/trips.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
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

router.get('/:tripId', async (req, res) => {
    const { tripId } = req.params;
    try {
        const [trip] = await getTripById(tripId);
        const [hotel] = await getHotelById(trip[0].idHotel);
        trip[0].hotel = hotel[0];
        delete trip[0].idHotel;
        res.json(trip);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await createTrip(req.body);
        const [trip] = await getTripById(result.insertId);
        res.json(trip[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:tripId', async (req, res) => {
    const { tripId } = req.params;
    try {
        const [result] = await updateTrip(tripId, req.body);
        const [trip] = await getTripById(tripId);
        res.json(trip[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete('/:tripId', async (req, res) => {
    const { tripId } = req.params;
    try {
        const [result] = await deleteTrip(tripId);
        res.json({ message: 'Viaje borrado' });
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;