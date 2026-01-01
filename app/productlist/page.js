
import '../api/api.css'

async function productList() {

    let response = await fetch("https://dummyjson.com/products");

    response = await response.json();
    return response.products;

}

export default async function Api_Page({}) {
    

    let product = await productList();

    // console.log(product)

    return (

        <>
            <h1>     This is Server Component For Api Calling </h1>


            {
                product.map((item, index) => {
                    return <div key={index} className="crd">

                        <h2> Id : -  {item.id}</h2>
                        <h3> Title :-  {item.title}</h3>

                        <h4> Decreiption :-  {item.description}</h4>

                        <h4> category :-  {item.category}</h4>
                        <h4> Price:- {item.price}</h4>
                        <h4> DiscountPercentage :-  {item.discountPercentage}</h4>
                        <h4> Rating :-  {item.rating}</h4>


                    </div>
                })
            }
        </>
    )

} 
