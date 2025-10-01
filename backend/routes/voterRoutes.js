const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');
const { voterAuth } = require('../middleware/authMiddleware');

// Voter routes
// router.get('/', voterAuth, voterController.getVoters);
// router.get('/:id', voterAuth, voterController.getVoterById);
// router.post('/', voterController.registerVoter);

router.get('/', voterController.getVoters);
router.get('/:id', voterController.getVoterById);
router.post('/', voterController.registerVoter);

module.exports = router;



