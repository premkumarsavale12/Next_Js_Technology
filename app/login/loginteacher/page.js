import Link from "next/link"

const Teacher = () => {

    return (

        <>
            <h1> This is TTeacher Component </h1>

            <Link href={"/login"} style={{ textDecoration: "none" }}>

                <h2> Go to Login Page </h2>
            </Link>

        </>
    )
}

export default Teacher 