import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriberShema = new Schema(
  {
    email: {
      type: String,
    },
    newsLetterOwnerId: {
      type: String,
    },
    source: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Subscriber = mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberShema);

export default Subscriber;