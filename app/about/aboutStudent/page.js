
import Link from "next/link"

export default function AboutPage() {
    return (

        <>

            <h1> This is About Student Page </h1>

            <Link href={"/about"} style={{ textDecoration: "none" }}>  Go to About Page   </Link>



        </>
    )
}
