
export default function Home() {


  return (

    <>

      <h1>This is Next Js Component </h1>
      <User name="premkumar Savale " />
      <Data />

    </>

  );
}

const User = (props) => {

  return (

    <>

      <h1> {props.name}</h1>
      <h1> This is User Component </h1>

    </>
  )
}

const Data = () => {
  return (

    <>

      <p> This is Data Component ....</p>

    </>
  )
}