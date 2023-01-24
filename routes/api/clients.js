const { getAll, getById, createClient, updateClient, deleteClient } = require('../../models/clients.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [clients] = await getAll();
        res.json(clients);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [client] = await getById(clientId);
        if (client.length === 0) {
            res.json({
                fatal: 'No existe el cliente'
            });
        }
        res.json(client[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await createClient(req.body);
        const [client] = await getById(result.insertId);
        res.json(client[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.put('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await updateClient(clientId, req.body);

        const [client] = await getById(clientId);

        res.json(client[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.delete(':clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await deleteClient(clientId);
        res.json({ message: 'Cliente borrado' });
    } catch (error) {
        res.json({ fatal: error.message })
    }
})

module.exports = router;