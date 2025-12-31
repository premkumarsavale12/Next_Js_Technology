
import Link from "next/link"


const page = () => {


  return (

    <>

      <h1> This is Next Js Page    &  This is Main Page </h1>

      <Link href={"/login"} style={{ textDecoration: "none" }}> Go to Login Page </Link>

      <br />
      <br />

      <Link href={"/about"} style={{ textDecoration: "none" }}>  Go to  About Page  </Link>
    </>
  )
}

export default page 
