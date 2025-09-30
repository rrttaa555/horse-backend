import express from 'express';
import Horse from '../models/Horse.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const horses = await Horse.find().populate('owner', 'username');
  res.json(horses);
});

router.post('/', async (req, res) => {
  const horse = new Horse(req.body);
  await horse.save();
  res.status(201).json(horse);
});

export default router;
