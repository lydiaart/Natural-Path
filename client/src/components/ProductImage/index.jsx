import { QUERY_ALL_PRODUCTS } from '../../utils/queries'
import { useQuery } from '@apollo/client'

import Card from '../Card'
function ProductImage({ category }) {
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS, { variables: { category, name: "" } })
    const products = data?.products || []
    console.log(category, products)
    return (
        <>
            <div className="container">
                <div className="row">
                    {products.length > 0 ? products.map(product => {
                        return (
                            <div className="col-sm-4">

                                <Card product={product}/>

                            </div>
                        )
                    }) : ""}

                </div>
            </div>
            {/* <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
 
    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
   
    <div className="carousel-inner">
        <div className={"item carousel-item active" }>
            <div className="row">
                
                <div className="col-sm-4">

                    <Card />

                </div>
                <div className="col-sm-4">

                    <Card />

                </div>
                <div className="col-sm-4">

                    <Card />

                </div>

            </div>
        </div>
        <div className="item carousel-item ">
            <div className="row">
                <div className="col-sm-4">

                    <Card />

                </div>
                <div className="col-sm-4">

                    <Card />

                </div>
                <div className="col-sm-4">

                    <Card />

                </div>
            </div>
        </div>
    </div>
   
    <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
        <i className="fa fa-angle-left"></i>
    </a>
    <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
        <i className="fa fa-angle-right"></i>
    </a>
</div> */}

        </>
    )
}

export default ProductImage