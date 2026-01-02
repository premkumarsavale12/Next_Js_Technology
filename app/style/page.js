"use client"

import { useState } from "react"

export default function Style() {

    const [data, setData] = useState({ backgroundColor: "red", color: "white" })


    return (

        <>

            <h1 style={{ backgroundColor: "blue", color: "red" }}>  This is Heading For Stylesh Purpose ....   </h1>

            <h3 style={data} > Heading here ... </h3>

            <button onClick={() => setData({ backgroundColor: "black", color: "purple" })}>  Update Style  </button>

        </>

    )

}
