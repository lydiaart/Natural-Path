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
                  <div className="col-sm-12 d-flex">
                    <p className="">
                      <div>| Nathan B | Lydia L | Carter S | Sterling W |</div>
                      <div>
                        <span className="separated">
                          {" "}
                          &copy; {new Date().getFullYear()} All Rights Reserved.
                        </span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
