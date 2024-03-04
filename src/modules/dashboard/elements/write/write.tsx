'use client'

import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Write = () => {

    const [emailTitle, setEmailTitle] = useState("");
    const [emails, setEmails] = useState<any>([]);
    const [open, setOpen] = useState(false);

    const router = useRouter();
    const { user } = useClerk();

    const handleCreate = () => {
        if (emailTitle.length === 0) {
            toast.error('Type a subject to continue')
        } else {
            const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
            router.push(`/dashboard/new-email?subject=${formattedTitle}`);
        }
    }
  
  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
      <div className="w-[200px] h-[200px] bg-slate-50 hover:bg-neutral-100 transition flex flex-col items-center justify-center rounded border cursor-pointer"
       onClick={() => setOpen(!open)}>
         <span className="text-2xl block text-center mb-3">{ICONS.plus}</span>
         <h5 className="text-2xl">Create New</h5>
      </div>

      {/* saved emails */}

      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full">
          <div className="w-[600px] p-5 bg-white rounded shadow relative">
            <div className="absolute top-3 right-3">
              <span className="text-lg cursor-pointer" onClick={() => setOpen(!open)}>
                {ICONS.cross}
              </span>
            </div>
            <h5 className="text-2xl">Enter your Email subject</h5>
            <input type="text" name="" id="" className="border w-full my-2 h-[35px] px-2 outline-none" value={emailTitle} onChange={(e) => setEmailTitle(e.target.value)}/>
            <Button color="primary" className="rounded text-xl mt-3" onClick={handleCreate}>
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Write