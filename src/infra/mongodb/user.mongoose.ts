import { Schema, model, type Document } from 'mongoose';
import type { UserProps } from '../../domain/user';

type IUser = UserProps & Omit<Document, 'id'>;

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
