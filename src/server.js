import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import horseRoutes from './routes/horses.js';
import videoRoutes from './routes/videos.js';
import messageRoutes from './routes/messages.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/horses', horseRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/messages', messageRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connesso');
    app.listen(4000, () => console.log('Server attivo su http://localhost:4000'));
  })
  .catch(err => console.error('Errore connessione MongoDB:', err));
