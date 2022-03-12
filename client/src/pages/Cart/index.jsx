import './index.css';
import { CARTS } from "../../utils/queries";
import {REMOVE_CART} from '../../utils/mutations';
import { useQuery,useMutation } from "@apollo/client";
import { loadStripe } from '@stripe/stripe-js';
import Auth from "../../utils/auth";
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


function Cart() {
    const [selectedCart, setSelectedCart] = useState ([])
    const { loading, data } = useQuery(CARTS)
    const carts = data?.carts.carts || []
    

    const [removeCart] = useMutation(REMOVE_CART)
    const handleCheckout = () => {
        
    }
    const handleRemove= async(cart)=>{
        await removeCart({variables:{
            _id: cart._id
        }})
        window.location.reload()
    }
    let newtotal=1
    let sum=1
    const displayCart = () => {

        let uniqueCart = []
        carts.forEach((cart,i) => {
                    if(uniqueCart.findIndex(obj=> obj.name==cart.name )===-1 ){
                        uniqueCart.push(cart)
                    }
        });

        let uniqueQty={} 
        carts.forEach((cart,i) => {
            let count=1
            carts.forEach((item,i) => {
                   if(cart.name===item.name){
                      uniqueQty[cart.name]=count++
                   }
            })
        })

        let newCart=[]
        let i=0
   
        for ( var property in uniqueQty ) {
              if(property===uniqueCart[i].name){
              newtotal=newtotal+uniqueCart[i].price * uniqueQty[property]
                 newCart.push({
                     ...uniqueCart[i],
                     quantity: uniqueQty[property]
                 })
                
              }   
              i++  
        }
      console.log(newtotal)
      setSelectedCart(newCart)
      // setTotal(newtotal)
      if (newCart.length > 0) {
        sum=newtotal+6.94
      }
    else {
        sum=0
    }
        
        return  newCart.map(cart => {
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
                            <input type="text" className="form-control" id="quantity" value={cart.quantity} />
                        </td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>${cart.price}</strong></td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>$ {cart.price*cart.quantity}</strong></td>
                        <td className="col-sm-1 col-md-1">
                            <button type="button" className="btn btn-danger" onClick={()=>handleRemove(cart)}>
                                <span className="glyphicon glyphicon-remove"></span> Remove
                            </button></td>
                    </tr>
                )
            
            

        })
    }
  
    return (
        <>
        {console.log(newtotal)}
        {Auth.loggedIn() && sum > 0  ? <div className="container m-3">
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
                                {loading ? "loading.." : displayCart()}


                          
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td><h5>Subtotal</h5></td>
                                    <td className="text-right"><h5><strong>${newtotal.toFixed(2)}</strong></h5></td>
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
                                    <td className="text-right"><h3><strong>${sum.toFixed(2)}</strong></h3></td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        <button type="button" className="btn btn-default" onClick={()=>window.location.href="/product"}>
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                                        </button></td>
                                    <td>
                                        <button type="button" className="btn btn-success" onClick={handleCheckout}>
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>:""}
           
        </>
    )
}

export default Cart;