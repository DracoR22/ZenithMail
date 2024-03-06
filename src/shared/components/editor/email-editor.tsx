'use client'

import { GetEmailDetails } from "@/actions/get-email-details";
import { saveEmail } from "@/actions/save-email";
import { DefaultJsonData } from "@/assets/mails/default";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"
import toast from "react-hot-toast";

const EmailEditorComponent = ({ subjectTitle }: { subjectTitle: string }) => {

  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);

  const { user } = useClerk();
  const history = useRouter();

  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
    });
  };   

  useEffect(() => {
    getEmailDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      // Server action
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsLetterOwnerId: user?.id!,
      }).then((res: any) => {
        console.log(res)
        toast.success(res.message);
        history.push("/dashboard/write");
      });
    });
  };

  const getEmailDetails = async () => {
    await GetEmailDetails({
      title: subjectTitle,
      newsLetterOwnerId: user?.id!,
    }).then((res: any) => {
      if (res) {
        setJsonData(JSON.parse(res?.content));
      }
      setLoading(false);
    });
  };

  return (
    <>
    {!loading && (
      <div className="w-full h-[90vh] relative">
        <EmailEditor minHeight={"80vh"} ref={emailEditorRef} onReady={onReady}/>
        <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
          <Button className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg" 
          onClick={saveDraft}>
            <span className="opacity-[.7]">Save Draft</span>
          </Button>
          <Button className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg" onClick={exportHtml}>
            <span>Send</span>
          </Button>
        </div>
      </div>
   )}
  </>
  )
}

export default EmailEditorComponent