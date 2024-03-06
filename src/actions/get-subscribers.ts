'use server'

import Subscriber from "@/models/subscriber-model";

export const getSubscribers = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
    try {
      const subscribers = await Subscriber.find({
        newsLetterOwnerId,
      });
      return subscribers;
    } catch (error) {
      console.log(error);
    }
  };