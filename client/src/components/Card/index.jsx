import { Redirect } from "react-router-dom";

function Card() {
    return (
        <>
            <div class="col-md-10 m-3">
                <div class="card" style={{backgroundColor:"#606c38",borderRadius:"10px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"350px"}}>

                    {/* <!--Card image--> */}
                    <img class="img-fluid" src="assets/images/background/product.png" alt="Card image cap" style={{borderRadius:"10px 10px 0 0"}}/>

                    {/* <!--Card content--> */}
                    <div class="card-body">
                        {/* <!--Title--> */}
                        <h4 class="card-title" style={{padding:"10px", color:"white"}}>Product Name</h4>
                        {/* <!--Text--> */}
                        <p class="card-text" style={{padding:"10px", color:"white"}}>Brief description of the product.</p>
                        <a href="#" class="btn text-white" style={{color:"white", paddingTop:"60px", fontSize:"14px"}}><i class="fa-solid fa-plus" style={{fontSize:"20px"}}></i>Add to cart</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card;