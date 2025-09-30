import express from 'express';
import Video from '../models/Video.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const videos = await Video.find().populate('horse owner', 'name username');
  res.json(videos);
});

router.post('/', async (req, res) => {
  const video = new Video(req.body);
  await video.save();
  res.status(201).json(video);
});

export default router;
