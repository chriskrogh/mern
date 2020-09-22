import mongoose from 'mongoose';

export interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.model<UserDoc>('User', UserSchema);

export default UserModel;
