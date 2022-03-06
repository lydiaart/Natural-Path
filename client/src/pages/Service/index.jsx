import Work from '../../components/Work';
import serviceData from '../../utils/service.json';
import './index.css'
function Service() {
    return (
        <>
            {/* <!--project start--> */}
            <section id="project" className="project">
                <div className="container">
                    <div className="project-details  ">
                        <div className="project-header text-left">
                            <h2>Service</h2>
                            <p>
                                Please choose the service you wish.
                            </p>
                        </div>
                        {/* <!--/.project-header--> */}
                        <div className="project-content">
                            <div className="gallery-content">
                                <div className="isotope col-centered">
                                <div className="row ">
												<div className="col-sm-6 col-xs-12  ">
													<div className="item">
														<Work serviceData={serviceData[4]} />
														{/* <!-- /.isotope-overlay --> */}
													</div>
													{/* <!-- /.item --> */}
												</div>
												{/* <!-- /.col --> */}
												<div className="col-sm-6 col-xs-12">
													<div className="item">
														<Work serviceData={serviceData[5]} />
														{/* <!-- /.isotope-overlay --> */}
													</div>
													{/* <!--/.item --> */}
												</div>
												{/* <!-- /.col --> */}
											</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Service;