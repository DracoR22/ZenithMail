import { ICONS } from "@/shared/utils/icons"
import { useUser } from "@clerk/nextjs"
import DashboardItems from "./dashboard-items"
import UserPlan from "./user-plan"

const DashboardSidebar = () => {

   const {user } = useUser()

  return (
    <div className="p-2">
      <div className="p-2 flex items-center bg-[#f5f5f5f5] rounded">
         <span className="text-2xl">
            {ICONS.home}
         </span>
         <h5 className="p-2 pt-1 capitalize font-medium">
           {user?.firstName}&apos;s Newsletter
         </h5>
      </div>
      <div>
        <DashboardItems/>
        <UserPlan/>
        <DashboardItems bottomContent={true}/>
      </div>
    </div>
  )
}

export default DashboardSidebar