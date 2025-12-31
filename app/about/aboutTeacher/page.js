
import Link from "next/link"


export default function AboutTeacher() {

    return (

        <>

            <h1> This is About Teacher </h1>

            <Link href={"/about"} style={{ textDecoration: "none" }}> Go to About Page </Link>

        </>
    )
}

