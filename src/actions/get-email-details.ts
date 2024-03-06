"use server";

import Email from "@/models/email-model";
import { connectDb } from "@/shared/lib/db";



export const GetEmailDetails = async ({ title, newsLetterOwnerId }: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });
    return email;
  } catch (error) {
    console.log(error);
  }
};