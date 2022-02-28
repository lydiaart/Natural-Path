import Card from '../../components/Card';

function Product() {
    return (
        <>
            <div className="container m-3">
                <div className="row">
                    <div className="col-md-12">
                        <h2> OnLine <b>Products</b></h2>
                        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                            {/* <!-- Carousel indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            {/* <!-- Wrapper for carousel items --> */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
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
                                <div className="item carousel-item">
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
                            {/* <!-- Carousel controls --> */}
                            <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;