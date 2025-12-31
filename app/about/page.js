import Link from "next/link";

export default function About_Page() {

    return (

        <>
            <h1> This is About Page </h1>
            <br />
            <br />


            <Link href={"/about/aboutStudent"} style={{ textDecoration: "none" }}> Go to About Student Page </Link>

            <br />
            <br />

            <Link href={"/about/aboutTeacher"} style={{ textDecoration: "none" }}> Go to About Teacher Page </Link>


            <br />
            <br />
            <Link href={"/"} style={{ textDecoration: "none" }}> Go to Main Page </Link>
        </>
    )
}

