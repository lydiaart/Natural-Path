import { useState } from "react";

import "./index.css"
function MyAccount() {
    const [state, setState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        username:"",
        password:""
    })
    const handleClick = (event) => {
        event.preventDefault()
        console.log(state)
        window.location.href = `mailto:cui4chinamed@gmail.com?subject=Contact from ${state.firstname} ${state.lastname}&body=${state.message}`
    }
    return (
        <div className="container ">
            <div className="row">
                <div className="col-6">
                    <div className="single-contact-box">
                        <div className="contact-form">                         
                            <div className="row">
                                <div className="col-sm-6">
                                <h3>Member Sign Up</h3>
                                    <form onSubmit={handleClick} className="form">
                                        <div className="row">
                                            <div className="col-sm-10 col-xs-12 col-centered">
                                                <div className="form-group">
                                                    <input type="text" value={state.firstname} onChange={(event) => setState({
                                                        ...state,
                                                        firstname: event.target.value
                                                    })} required className="form-control" id="firstname"
                                                        placeholder="First Name" name="firstname" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>

                                        </div>
                                        <div className="row">
                                            {/* <!--/.col--> */}
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="text" value={state.lastname} onChange={(event) => setState({ ...state, lastname: event.target.value })} required className="form-control" id="lastname"
                                                        placeholder="Last Name" name="laststname" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                        <div className="row">
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="email" value={state.email} onChange={(event) => setState({ ...state, email: event.target.value })} className="form-control" id="email"
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

                                <div className="col-sm-6">
                                    <form onSubmit={handleClick} className="form">
                                    <h3>Member Log In</h3>
                                        <div className="row">
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="email" value={state.email} onChange={(event) => setState({
                                                        ...state,
                                                        email: event.target.value
                                                    })} required className="form-control" id="email"
                                                        placeholder="Email" name="email" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>

                                        </div>

                                        <div className="row">
                                            {/* <!--/.col--> */}
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                                <div className="form-group">
                                                    <input type="text" value={state.password} onChange={(event) => setState({ ...state, password: event.target.value })} required className="form-control" id="password"
                                                        placeholder="Password" name="password" />
                                                </div>
                                                {/* <!--/.form-group--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        <div className="row  ">
                                            <div className="col-sm-10 col-centered">
                                                <div className="single-contact-btn m-3">
                                                    <button className="contact-btn" type="submit">Log In</button>
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
    )
}

export default MyAccount;