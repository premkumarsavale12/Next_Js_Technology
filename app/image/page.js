import Image from "next/image"
import { sahyadari } from '../../public/sahyadari.avif'
export default function Page() {



    return (

        <>
            <h1> This is Image Tag using Next Js Image Optimization.... </h1>

            <Image
                src={sahyadari}
                alt={"demo_Images"}
                height={400}
                width={300}
            />

        </>
    )
}

