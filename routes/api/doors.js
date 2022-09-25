const express = require('express');
const router = express.Router();
const keys = require('../../config/key');
const passport = require('passport');

// @route   GET api/doors/test
// @desc    Tests users route
// @access  Public
router.get('/test', async (req, res) => {
  res.json({msg: 'Doors Works'})
});

// @route   GET api/doors/contacts/:id
router.get('/door_num/:id', async (req, res) => {
  var door = [1,0,0,1,1,1]; //door number return value
  res.json(door[req.params.id-1]);
})


module.exports = router;
