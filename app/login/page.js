import Link from "next/link";


export default function Login() {

    return (
        <>
            <h1> This is Login  Page </h1>

            <Link href={"/login/studentLogin"} style={{ textDecoration: "none" }}>  Go to Student Login page </Link>

            <br />
            <br />


            <Link href={"/login/studentLogin"} style={{ textDecoration: "none" }}> Go to Teacher Login Page </Link>

            <br />
            <br />


            <Link href={"/"} style={{ textDecoration: "none" }}> Go to Main Page </Link>


        </>

    )

}

