
"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const page = () => {

  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }


  return (

    <>
      <h1> Welcome to Next Js Technology.... </h1>

      <Link href={"/login"} style={{ textDecoration: "none" }}>

        <h4>  Go to Login Page ...</h4>

      </Link>

      <button onClick={() => navigate("/about")}> Go to About Page </button>

    </>   
  )
}

export default page