const router = require('express').Router();

router.use('/clients', require('./api/clients'));
router.use('/hotels', require('./api/hotels'));
router.use('/trips', require('./api/trips'));

router.get('/', (req, res) => {
    res.send('estoy en api');
});


module.exports = router;