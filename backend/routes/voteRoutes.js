
// // Get all candidates (for voting purposes)
// router.get('/candidates', voterAuth, voteController.getCandidates);

// // Vote for a candidate
// router.post('/vote', voterAuth, voteController.voteForCandidate);


// const express = require('express');
// const router = express.Router();
// const voteController = require('../controllers/voteController');
// const { voterAuth } = require('../middleware/authMiddleware');


// // Get all candidates (for voting purposes)
// router.get('/candidates', voteController.getCandidates);

// // Vote for a candidate
// router.post('/vote', voteController.voteForCandidate);

// module.exports = router;


const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');
const { voterAuth } = require('../middleware/authMiddleware');

// Get all candidates (for voting purposes)
router.get('/candidates', voteController.getCandidates);

// Vote for a candidate
router.post('/vote', voteController.voteForCandidate);

// Get voting results for the Results Dashboard
// router.get('/results', voteController.getResults);

module.exports = router;
