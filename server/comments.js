const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('GET Request: /comments/')
    res.send('Get all comments')
});

router.post('/', (req, res) => {
    res.send('Create a new comment')
})

module.exports = router; 