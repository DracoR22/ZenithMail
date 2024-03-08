'use server'

import Membership from "@/models/membership-model";
import { currentUser } from "@clerk/nextjs";

export const getMemberShip = async () => {
    try {
        const user = await currentUser();

        if (user) {
          const membership = await Membership.findOne({
            userId: user?.id,
          })

          return membership
        }
    } catch (error) {
      console.log(error);
    }
  };