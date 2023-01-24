const { getAll } = require('../../models/clients.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [clients] = await getAll();
        res.json(clients);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

module.exports = router;