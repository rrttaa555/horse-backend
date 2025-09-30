import mongoose from 'mongoose';
const HorseSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  rider: String,
  age: Number,
  price: Number,
  location: String,
  description: String,
  image: String,
  phone: String,
});
export default mongoose.model('Horse', HorseSchema);
