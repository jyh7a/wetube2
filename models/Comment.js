import mongoose from "mongooose"

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }
})