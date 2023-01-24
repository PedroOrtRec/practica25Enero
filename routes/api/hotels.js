const { getAllHotels, getHotelById, createHotel, updateHotel, deleteHotel } = require('../../models/hotels.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [hotels] = await getAllHotels();
        res.json(hotels);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    try {
        const [hotel] = await getHotelById(hotelId);
        if (hotel.length === 0) {
            res.json({ fatal: 'El hotel no existe' });
        }
        res.json(hotel[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await createHotel(req.body);
        const [hotel] = await getHotelById(result.insertId);
        res.json(hotel[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:hotelId', async (req, res) => {
    const { hotelId } = req.params;

    try {
        const [result] = await updateHotel(hotelId, req.body);

        const [hotel] = await getHotelById(hotelId);

        res.json(hotel[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.delete('/:hotelId', async (req, res) => {
    const { hotelId } = req.params;
    try {
        const [result] = await deleteHotel(hotelId);
        res.json({ message: 'Hotel borrado' });
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;