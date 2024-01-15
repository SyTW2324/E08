import { Document, Schema, model } from "mongoose";
import { GroupDocumentInterface } from "./group.js";
import { CommentDocumentInterface } from "./comment.js";

export interface GroupChatDocumentInterface extends Document {
  id: number;
  group_id: GroupChatDocumentInterface;
  chat: CommentDocumentInterface[];
}

const GroupChatSchema = new Schema<GroupChatDocumentInterface>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  group_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Group",
  },
  chat: {
    type: [Schema.Types.ObjectId],
    required: true,
    ref: "Comment",
  },
});

export const Groupchat = model<GroupChatDocumentInterface>(
  "Groupchat",
  GroupChatSchema
);
