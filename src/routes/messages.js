import express from 'express';
import Message from '../models/Message.js';
const router = express.Router();

router.get('/:user1/:user2', async (req, res) => {
  const { user1, user2 } = req.params;
  const messages = await Message.find({
    $or: [
      { from: user1, to: user2 },
      { from: user2, to: user1 },
    ],
  }).sort({ createdAt: 1 });
  res.json(messages);
});

router.post('/', async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.status(201).json(msg);
});

export default router;
