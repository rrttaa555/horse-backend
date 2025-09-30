import mongoose from 'mongoose';
const MessageSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  video: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('Message', MessageSchema);
