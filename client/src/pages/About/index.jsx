import './index.css'
function About({setCurrentPage}){
    return (
        <>
        	{/* <!--about-me start --> */}
	<section className="about-us">
		<div className="container">
			<div className="about-us-content">
				<div className="row">
					<div className="col-sm-6">
						<div className="single-about-us">
							<div className="about-us-txt">
								<h2>about</h2>
								<p>
                                Yan Bian Acumedic is a family owned business. Ms.HongHua Cui is second generation L.Ac, OMD. It started about fourty years ago. The founder, Ms. Xu served and helped many patients with Chinese herb medicine and acupunture treatment. As many people received the good results from the treatments, the clinic expanded to the second location. Ms. Cui continued to 
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
								<img src="assets/images/about/about-part.jpg" alt="about me image"/>
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