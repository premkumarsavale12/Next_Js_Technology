
import Link from 'next/link'
const Login = () => {
    return (
        <>

            <h1> This is Login Page .......</h1>

            <Link href={"/login/loginstudent"} style={{ textDecoration: "none" }}>
                <h2> Go to Login Student Login Page ... </h2>
            </Link>

            <Link href={"/login/loginteacher"} style={{ textDecoration: "none" }}>

                <h2>  Go to  Login Teacher Page... </h2>

            </Link>

            <Link href={"/"} style={{ textDecoration: "none" }}>

                <h4> Go to Main Page ...</h4>
            </Link>
        </>
    )
}

export default Login 