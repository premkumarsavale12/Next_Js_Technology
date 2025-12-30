
"use client"
import { useState } from "react"

export default function Home() {

  const [data, setData] = useState(0);

  const Incre = () => {

    setData(data + 1);

  }


  const Decre = () => {
    if (data == 0) {
      alert(" 0 is not be descread");


    }
    else {
      setData(data - 1);

    }
  }

  return (

    <>

      <h1> {data}</h1>
      <button onClick={Incre}> Incerement </button>
      <button onClick={Decre}> Decrement </button>


    </>
  )
}