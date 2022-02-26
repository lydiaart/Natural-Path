import "./index.css";

function Nav() {
    return(
        <>
        <section id="menu">
		<div className="container">
			 
		<a className="navbar-brand" id="name"> <img src="" alt="logo" />   </a>
			<div className="menubar">
		
				<nav className="navbar navbar-default">

					{/* <!-- Brand and toggle get grouped for better mobile display --> */}
					<div className="navbar-header">
					
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								
							<span className="sr-only">Toggle navigation.</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					
					</div>
					{/* <!--/.navbar-header --> */}

					{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				
						<ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>

						</ul>
                        {/* <!-- / ul --> */}
					</div>
                    {/* ><!-- /.navbar-collapse --> */}
				</nav>
				{/* <!--/nav --> */}
			</div>
			{/* <!--/.menubar --> */}
		</div>
        {/* <!-- /.container --> */}

	</section>
        </>
    )
}

export default Nav;