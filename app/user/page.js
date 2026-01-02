
import custom from '../custom.module.css'
import other from '../other.module.css'
export default function Page() {
     return (

          <>

               <h3 className={custom.main}> User Page ... </h3>
               <h4 className={custom.main}> This is Main Page for Heading Purpose ... </h4>

          <h1 className={other.main}> This is Main heading for stylish purpose </h1>

          </>
     )
}
