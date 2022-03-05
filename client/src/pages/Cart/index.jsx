import './index.css';
import { CARTS } from "../../utils/queries";
import { useQuery } from "@apollo/client"

function Cart() {
    const { loading, data } = useQuery(CARTS)
    const carts = data?.carts.carts || []
    console.log(carts)
    const displayCart = () => {
       let quantity = 0
       let previousProduct = ""


     return   carts.map(cart => {
               
        quantity = 0
              carts.forEach(cartItem=>{
                  console.log(cart.name, cartItem.name)
                  if(cart.name.trim()===cartItem.name.trim()){
                      quantity=quantity + 1
                  }
                  else {
                      quantity=1
                  }
              })

          console.log(quantity)
            return (
                <tr>
                    <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <a className="thumbnail pull-left" href="#"> <img className="media-object" src={"/assets/images/background/" + cart.image} style={{ width: "72px", height: "72px" }} /> </a>
                            <div className="media-body">
                                <h4 className="media-heading"><a href="#">{cart.name}</a></h4>
                                {/* <h5 className="media-heading"> by <a href="#">Brand name</a></h5> */}
                                <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                            </div>
                        </div></td>
                    <td className="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
                        <input type="text" className="form-control" id="quantity" value={quantity} />
                    </td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>${cart.price}</strong></td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                    <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger">
                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                </tr>
            )
        })
    }
    return (
        <>
            <div className="container m-3">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Total</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? "loading.." : displayCart() }


                                {/* <tr>
                                    <td className="col-md-6">
                                        <div className="media">
                                            <a className="thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style={{width: "72px", height: "72px"}} /> </a>
                                            <div className="media-body">
                                                <h4 className="media-heading"><a href="#">Product name</a></h4>
                                                <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                                <span>Status: </span><span className="text-warning"><strong>Leaves warehouse in 2 - 3 weeks</strong></span>
                                            </div>
                                        </div></td>
                                    <td className="col-md-1" style={{textAlign: "center"}}>
                                        <input type="email" className="form-control" id="exampleInputEmail1" value="2" />
                                    </td>
                                    <td className="col-md-1 text-center"><strong>$4.99</strong></td>
                                    <td className="col-md-1 text-center"><strong>$9.98</strong></td>
                                    <td className="col-md-1">
                                        <button type="button" className="btn btn-danger">
                                            <span className="glyphicon glyphicon-remove"></span> Remove
                                        </button></td>
                                </tr>
                              */}
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h5>Subtotal</h5></td>
                                    <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h5>Estimated shipping</h5></td>
                                    <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h3>Total</h3></td>
                                    <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></td>
                                    <td>
                                        <button type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;