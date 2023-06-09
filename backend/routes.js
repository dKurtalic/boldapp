const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mssg: 'evoo pocetak' });
})


router.get('/signin', (req, res) => {
    res.json({ mssg: 'signin' });
})

router.get('/:id', (req, res) => {
    res.json({ mssg: 'id je ' });
})

module.exports = router