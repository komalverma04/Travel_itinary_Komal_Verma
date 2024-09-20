import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables

dotenv.config({ path: '.env.local' });  // Explicitly load .env.local

const connectDB = async () =>{

    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
    }catch(error){
        console.log(error);
    }
}

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectDB();

// Import routes
import itineraryRoutes from './routes/itineraryRoutes.js';
app.use('/api/itineraries', itineraryRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
