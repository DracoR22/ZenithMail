'use server'

import Email from "@/models/email-model"
import { connectDb } from "@/shared/lib/db"

export const getEmails = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
   try {
      const email = await Email.find({ newsLetterOwnerId })

      return email
   } catch (error) {
      console.log(error)
   }
} 