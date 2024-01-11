import { Document, Schema, model } from "mongoose";
import { BookDocumentInterface} from "./book.js"
import { UserDocumentInterface } from "./user.js"

export interface CommentDocumentInterface extends Document {
  comment_id: number;
  book_referenced: BookDocumentInterface;
  author: UserDocumentInterface;
  comment: string;
}

const CommentSchema = new Schema<CommentDocumentInterface> ({
  comment_id: {
      type: Number,
      required: true,
      unique: true,
    },
  author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  comment: {
      type: String,
      required: true,
      validate: (content : string) => {
        if (content.length > 300) {
          throw new Error("Comment must be lower than 300 chars");
        }
      }
    },
  book_referenced: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Book",
    },
  }
)