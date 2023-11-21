import { Document, Schema, model } from "mongoose";

export interface UserDocumentInterface extends Document {
  id: string;
  full_name: string;
  mail: string;
  birth_date: Date;
}

const UserSchema = new Schema<UserDocumentInterface>({
  id: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  full_name: {
    type: String,
    required: true,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    validate: (value: string) => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/.test(value)) {
        throw new Error("Not a valid mail");
      }
    },
  },
  birth_date: {
    type: Date,
    required: true,
    validate: (value: Date) => {
      if (value > new Date()) {
        throw new Error("Future date not permited");
      }
    },
  },
});

export const User = model<UserDocumentInterface>("User", UserSchema);
