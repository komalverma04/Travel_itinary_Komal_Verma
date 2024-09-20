import mongoose from 'mongoose';

// Define the Itinerary Schema
const ItinerarySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  totalBudget: {
    type: Number,
    required: true,
  },
  tripDuration: {
    type: Number,
    required: true,
  },
  preferences: {
    type: [String], // array of preferences like ['History', 'Food']
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Itinerary model
const Itinerary = mongoose.model('Itinerary', ItinerarySchema);

export default Itinerary;
