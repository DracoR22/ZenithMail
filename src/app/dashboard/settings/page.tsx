'use client'

import SettingsTabs from "@/shared/components/tabs/settings-tabs"
import useGetMembership from "@/shared/hooks/use-get-membership"
import useSettingsFilter from "@/shared/hooks/use-settings-filter"
import { UserProfile } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { generateApiKey, regenerateApiKey } from "@/shared/utils/token-generator"
import { set } from "mongoose"
import { Snippet } from "@nextui-org/react"
import { ICONS } from "@/shared/utils/icons"
import toast from "react-hot-toast"

const SettingsPage = () => {

   const { activeItem } = useSettingsFilter()
   const { data } = useGetMembership()

   const [apiKey, setApiKey] = useState<string>('')

   useEffect(() => {
     const apiKey = Cookies.get('api_key')

     if (!apiKey) {
       generateApiKeyHandler()
     }  else {
      setApiKey(apiKey)
     }
   }, [])

   const generateApiKeyHandler = async () => {
       await generateApiKey().then((res: string) => {
         Cookies.set('api_key', res)
         setApiKey(res)
       })
   }

   const handleRegenerateApiKey = async () => {
      await regenerateApiKey().then((res) => {
        Cookies.set("api_key", res);
        setApiKey(res);
        toast.success("API Key updated!");
      });
    };

   const onCopyToClipboard = (s: string) => {
      navigator.clipboard.writeText(s)
      toast.success("Copied!");
    }

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
            <div className="p-4 w-full overflow-hidden">
               <h3>API KEY:</h3>
               <div className="flex items-center gap-x-2">
               <p className="whitespace-pre-line overflow-hidden break-words border">
                   {apiKey.slice(0, 36)}...
               </p>
               <div className="h-[38px] w-[90px] rounded my-3 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                  onClick={() => onCopyToClipboard(apiKey)}>
                  <span className="text-lg">{ICONS.copy}</span>
                  <span className="pl-1">copy</span>
                </div>

                <div className="h-[38px] w-[120px] ml-4 rounded my-3 cursor-pointer bg-[#DFE7FF] flex items-center justify-center"
                  onClick={handleRegenerateApiKey}>
                  <span className="text-lg">{ICONS.regenerate}</span>
                  <span className="pl-1">Regenerate</span>
                </div>
                </div>
            </div>
           )}
        </div>
       )}
    </div>
  )
}

export default SettingsPage