
import { ADD_CART } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

function Card({ product }) {
    const [addCart] = useMutation(ADD_CART);
    const handleAddToCart = async (product) => {
   
        await addCart({
            variables: {
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1
            }
        })
        window.location.reload()
    }
    return (
        <>
            <div class="col-md-10 m-3">
                <div class="card" style={{ backgroundColor: "#606c38", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height: "60h" }}>

                    {/* <!--Card image--> */}
                    <img class="img-fluid" src={"assets/images/background/" + product.image} alt="Card image cap" style={{ borderRadius: "10px 10px 0 0" }} />

                    {/* <!--Card content--> */}
                    <div class="card-body">
                        {/* <!--Title--> */}
                        <h4 class="card-title" style={{ padding: "10px", color: "white" }}>{product.name}</h4>
                        <h5 class="card-title" style={{ padding: "10px", color: "white" }}>${product.price}</h5>
                        {/* <!--Text--> */}
                        <p class="card-text" style={{ padding: "10px", color: "white" }}>{product.description}</p>
                        {Auth.loggedIn()?   <a href="#" class="btn text-white" style={{ color: "white", paddingTop: "60px", fontSize: "14px" }}
                            onClick={() => handleAddToCart(product)}><i class="fa-solid fa-plus" style={{ fontSize: "20px" }}></i>Add to cart</a> :"" }
                      
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;