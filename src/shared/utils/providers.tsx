'use client'

import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"
import { NextUIProvider } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast"
import DashboardSidebar from "../widgets/dashboard/sidebar/dashboard-sidebar";
import { addStripe } from "@/actions/add-stripe";

const Providers = ({ children }: PropsWithChildren) => {

   const pathname = usePathname()

   const { isLoaded, user } = useUser()

   const isStripeCustomerIdHas = async () => {
    await addStripe();
  };

   if (!isLoaded) {
      return null
   } else {
    if (user) {
      isStripeCustomerIdHas();
    }
  }

  return (
    <NextUIProvider>
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/success" &&
      pathname !== "/sign-in" ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll">
            <DashboardSidebar/>
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  )
}

export default Providers