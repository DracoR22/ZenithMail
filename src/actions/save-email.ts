'use server'

import Email from "@/models/email-model"
import { connectDb } from "@/shared/lib/db"

export const saveEmail = async ({ title, content, newsLetterOwnerId }: { title: string, content: string, newsLetterOwnerId: string }) => {
    try {
        const email = await Email.findOne({ title, newsLetterOwnerId })

        if (email) {
            await Email.findByIdAndUpdate(email._id, { content })

            return { message: 'Email updated succesfully' }
        } else {
            await Email.create({ title, content, newsLetterOwnerId })

            return { message: 'Email saved succesfully!' }
        }
    } catch (error) {
        console.log(error)
    }
}