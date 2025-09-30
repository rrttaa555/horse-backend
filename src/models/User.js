import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  username: String,
  profileImage: String,
  bio: String,
});
export default mongoose.model('User', UserSchema);
