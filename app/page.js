
import Link from "next/link"


const page = () => {


  return (

    <>

      <h1> This is Next Js Page </h1>

      <Link href={"/login"} style={{ textDecoration: "none" }}> Go to Login Page </Link>
    </>
  )
}

export default page 
