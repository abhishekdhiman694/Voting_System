// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController');
// const { candidateAuth } = require('../middleware/authMiddleware');

// router.get('/', candidateAuth, candidateController.getCandidates);
// router.post('/', candidateAuth, candidateController.addCandidate);
// router.delete('/:id', candidateAuth, candidateController.deleteCandidate);

// module.exports = router;





const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const { candidateAuth } = require('../middleware/authMiddleware');

// // Get all candidates
// router.get('/', candidateAuth, candidateController.getCandidates);

// // Get a specific candidate by ID
// router.get('/:id', candidateAuth, candidateController.getCandidateById);

// // Add a new candidate
// router.post('/', candidateAuth, candidateController.addCandidate);

// // Update a candidate by ID
// router.put('/:id', candidateAuth, candidateController.updateCandidate);

// // Delete a candidate by ID
// router.delete('/:id', candidateAuth, candidateController.deleteCandidate);


// Get all candidates
router.get('/', candidateController.getCandidates);

// Get a specific candidate by ID
router.get('/:id', candidateController.getCandidateById);

// Add a new candidate
router.post('/', candidateController.addCandidate);

// Update a candidate by ID
router.put('/:id', candidateController.updateCandidate);

// Delete a candidate by ID
router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;

