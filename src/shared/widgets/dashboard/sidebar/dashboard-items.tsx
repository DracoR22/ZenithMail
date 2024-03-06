import { sideBarBottomItems, sideBarItems } from "@/configs/constants"
import useRouteChange from "@/shared/hooks/use-route-change"
import { ICONS } from "@/shared/utils/icons"
import { useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { useEffect } from "react"

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {

   const { activeRoute, setActiveRoute } = useRouteChange()
   const { signOut, user } = useClerk()
   const pathname = usePathname()

   const LogoutHandler = () => {
     signOut()
     redirect('/sign-in')
   }

   useEffect(() => {
    setActiveRoute(pathname)
   }, [pathname, setActiveRoute])

  return (
    <>
     {!bottomContent ? (
        <div className="mt-6">
         {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link key={index} href={item.url} className={`p-2 gap-y-2 flex items-center font-medium hover:bg-indigo-500/20 transition ${item.url === activeRoute && "bg-indigo-500/20"}`}>
              <span className={`text-xl mr-2 hover:text-[#463bbd] transition  ${item.url === activeRoute && "text-[#463bbd]"}`}>
                {item.icon}
              </span>
              <span className={`text-lg mr-2 hover:text-[#463bbd] transition ${item.url === activeRoute && "text-[#463bbd]"}`}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>
     ) : (
        <>
           {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link key={index} className={`p-2 py-2 flex items-center font-medium hover:bg-indigo-500/20 transition ${item.url === activeRoute && "bg-indigo-500/20"}`}
                href={item.url === "/" ? `/subscribe?username=${user?.firstName}` : item.url}>
                <span className={`text-xl mr-2 ${item.url === activeRoute && "text-[#463bbd]"}`}>
                  {item.icon}
                </span>
                <span className={`text-lg mr-2 ${item.url === activeRoute && "text-[#463bbd]"}`}>
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* SIGN OUT */}
          <div className="p-2 py-2 font-medium flex items-center cursor-pointer border-b" onClick={LogoutHandler}>
            <span className="text-xl mr-2">{ICONS.logOut}</span>
            <span className="text-lg">Sign Out</span>
          </div>
          {/* FOOTER */}
          <br />
          <br />
          <div className="w-full flex justify-center cursor-pointer">
            ZenithMail
          </div>
          <p className="text-sm text-center pt-5 pb-10">
            © 2024 ZenithMail, Inc. All rights reserved.
          </p>
         </>
       )}
        </>
  )
}

export default DashboardItems