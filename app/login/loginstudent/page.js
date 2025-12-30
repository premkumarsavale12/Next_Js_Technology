
import Link from 'next/link'

const Student = () => {
    return (
        <>
            <h1> This  is Student Component..... </h1>


            <Link href={"/login"}  style={{textDecoration:"none"}} >

                <h3> Go to Login page </h3>
            </Link>
        </>
    )
}

export default Student 