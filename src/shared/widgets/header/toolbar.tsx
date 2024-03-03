'use client'

import { useUser } from "@clerk/nextjs"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

const Toolbar = () => {

  const { user } = useUser()

  return (
    <>
      <Button color="primary" className="font-medium">
          Start Trial
      </Button>
      {user ? (
        <>
          <Link href={'/dashboard'} >
            <Image src={user?.imageUrl} alt="" width={40} height={40} className="rounded-full"/>
          </Link>
        </>
      ) : (
        <Link href={"/sign-in"} className="font-medium">
          Login
        </Link>
      )}
    </>
  )
}

export default Toolbar