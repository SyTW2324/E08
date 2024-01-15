import { Document, Schema, model } from "mongoose";
import { UserDocumentInterface } from "./user.js";
import { GroupChatDocumentInterface } from "./groupchat.js";

export interface GroupDocumentInterface extends Document {
  id: number;
  admin: UserDocumentInterface;
  group_name: string;
  genres: string[];
  members: UserDocumentInterface[];
  groupchat: GroupChatDocumentInterface;
}

const GroupSchema = new Schema<GroupDocumentInterface>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  group_name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  genres: {
    type: [String],
    required: true,
    trim: true,
  },
  members: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "User",
  },
  groupchat: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "GroupChat",
  },
});

export const Group = model<GroupDocumentInterface>("Group", GroupSchema);
