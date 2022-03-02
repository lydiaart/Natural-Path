import './index.css';
import { useState } from "react"
function EditProfile() {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })
    const handleSignUp = (event) => {
        event.preventDefault()
        console.log(state)
        window.location.href = `mailto:cui4chinamed@gmail.com?subject=Contact from ${state.firstname} ${state.lastname}&body=${state.message}`
    }
    return(
        <>
     <div className="container col-centered">
            <div className="row">
                <div className="col-6">
                    <div className="single-contact-box">
                        <div className="contact-form">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3>Member Sign Up</h3>
                                    <form onSubmit={handleSignUp} className="form">
                                        <div className="row">
                                            <div className="col-sm-10 col-xs-12 col-centered">
                                                <div className="form-group">
                                                    <input type="text" value={state.firstName} onChange={(event) => setState({
                                                        ...state,
                                                        firstName: event.target.value
                                                    })} required className="form-control" id="firstName"
                                                        placeholder="First Name" name="firstName" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>

                                        </div>
                                        <div className="row">
                                            {/* <!--/.col--> */}
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="text" value={state.lastName} onChange={(event) => setState({ ...state, lastName: event.target.value })} required className="form-control" id="lastName"
                                                        placeholder="Last Name" name="laststName" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                        <div className="row">
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="email" value={state.signUpEmail} onChange={(event) => setState({ ...state, signUpEmail: event.target.value })} className="form-control" id="email"
                                                        placeholder="email" name="email" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>

                                        </div>
                                        {/* <!--/.row--> */}
                                        <div className="row">
                                            {/* <!--/.col--> */}
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="password" value={state.signUpPassword} onChange={(event) => setState({ ...state, signUpPassword: event.target.value })} className="form-control" id="password"
                                                        placeholder="Password" name="password" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        <div className="row">
                                            {/* <!--/.col--> */}
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="text" value={state.phone} onChange={(event) => setState({ ...state, phone: event.target.value })} className="form-control" id="phone"
                                                        placeholder="Phone" name="phone" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                        <div className="row">
                                            <div className="col-sm-10 col-centered ">
                                                <div className="single-contact-btn m-3">
                                                    <button className="contact-btn" type="submit" >Sign Up</button>
                                                </div>
                                                {/* <!--/.single-single-contact-btn--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>


                                        {/* <!--/.row--> */}
                                    </form>
                                </div>

                                
                            </div>

                            {/* <!--/form--> */}
                        </div>
                        {/* <!--/.contact-form--> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditProfile;