import mongoose from 'mongoose';
const VideoSchema = new mongoose.Schema({
  horse: { type: mongoose.Schema.Types.ObjectId, ref: 'Horse' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  url: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});
export default mongoose.model('Video', VideoSchema);
