import mongoose from "mongoose";

const figureSchema = mongoose.Schema(
  {
    target: {
      type: String,
      required: true,
    },
    requestType: {
      type: String,
      required: true,
    },
    portRange: {
      type: [Number],
    },
    maxRetries: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default figureSchema;
