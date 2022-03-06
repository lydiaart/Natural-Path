
import DropDown from '../../components/DropDown';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import {useState,useEffect} from 'react'
import ProductImage from '../../components/ProductImage'
function Product() {
    const { loading, data } = useQuery(QUERY_CATEGORIES)
    const categories = data?.categories || []
   
    
    const [category,setCategory] = useState("")
   
  useEffect(()=>{
      if(categories.length>0){
        setCategory(categories[0]._id)
      }
    
  },[loading])
    


    return (
        <>
          <div style={{height: '180vh'}}> 
            <div className="container m-3 ">
                <div className="row">
                    <div className="col-md-12">
                        <h2> OnLine <b>Products</b></h2>
                        <br />
                        <DropDown setCategory={setCategory} categories={categories} loading={loading}  />
 
                       <ProductImage category={category}/>
                 
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Product;