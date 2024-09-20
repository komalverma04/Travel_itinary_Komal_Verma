import express from 'express';
import Itinerary from '../models/itineraryModel.js';

const router = express.Router();

// @route    POST /api/itineraries
// @desc     Create a new itinerary
router.post('/', async (req, res) => {
  try {
    const newItinerary = new Itinerary(req.body);
    const savedItinerary = await newItinerary.save();
    res.json(savedItinerary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route    GET /api/itineraries/:userId
// @desc     Get all itineraries for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.params.userId });
    res.json(itineraries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route    GET /api/itineraries/:id
// @desc     Get a specific itinerary by ID
router.get('/single/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    res.json(itinerary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route    DELETE /api/itineraries/:id
// @desc     Delete an itinerary by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    res.json({ message: 'Itinerary deleted', deletedItinerary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
