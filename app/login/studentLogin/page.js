import Link from "next/link";

export default function StudentLogin() {

    return (

        <>

            <h1> This is Student Login Page...  </h1>

            <Link href={"/login"} style={{textDecoration:"none"}}> Go to Login Page </Link>

        </>

    )

}
