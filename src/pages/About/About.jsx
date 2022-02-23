import './About.css'
function About({setCurrentPage}){
    return (
        <>
        	{/* <!--about start --> */}
	<section className="about-us">
		<div className="container">
			<div className="about-us-content">
				<div className="row">
					<div className="col-sm-6">
						<div className="single-about-us">
							<div className="about-us-txt">
								<h2>about</h2>
								<p>
									
								</p>
								<div className="project-btn">
									<a href="#" className="project-view" onClick={()=>setCurrentPage("Projects")}>Service
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="single-about-us">
							<div className="about-us-img">
								<img src="public/images/DSC_2235.JPG" alt="about image"/>
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

export default About;