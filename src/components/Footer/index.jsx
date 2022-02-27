import "./index.css";

function Footer() {
    return (
        <>
            {/*<!--footer copyright start--> */}
            <footer className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="foot-copyright col-sm-10">
                                    <div className="col-sm-12 d-flex justify-content-center">
                                        <p className="">
                                            &copy; {new Date().getFullYear()} by Nathan B |  Carter S |  Sterling W  |  Lydia L
                                                  <span className="separated"> All Rights Reserved.</span>   
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;