'use client'

import SettingsTabs from "@/shared/components/tabs/settings-tabs"
import useGetMembership from "@/shared/hooks/use-get-membership"
import useSettingsFilter from "@/shared/hooks/use-settings-filter"
import { UserProfile } from "@clerk/nextjs"
import { useEffect } from "react"
import Cookies from "js-cookie"

const SettingsPage = () => {

   const { activeItem } = useSettingsFilter()
   const { data } = useGetMembership()

   useEffect(() => {
     const isApiKeyAvailable = Cookies.get('api_key')
   }, [])

  return (
    <div className="w-full p-5">
       <SettingsTabs/>
       {activeItem === 'Customize Profile' && (
        <div className="w-full flex justify-center">
           <UserProfile/>
        </div>
       )}

      {/* API ACCESS */}
      {activeItem === 'API Access' && (
        <div>
           {data?.plan !== 'LAUNCH' ? (
            <div className="w-full h-[90vh] flex items-center justify-center">
              <h3>Please update your subscription plan to get API access.</h3>
            </div>
           ) : (
            <div>
               <h3>
                 
               </h3>
            </div>
           )}
        </div>
       )}
    </div>
  )
}

export default SettingsPage