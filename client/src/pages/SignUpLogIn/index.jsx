import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, ADD_USER } from "../../utils/mutations";
import "./index.css";
import Auth from "../../utils/auth"

function MyAccount() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    })

    const [addUser] = useMutation(ADD_USER)
    const [login] = useMutation(LOGIN)


    const handleSignUp = async (event) => {
        event.preventDefault()
        console.log({
            ...state,
            password: state.signUpPassword
        }
        )
        const { data } = await addUser({
            variables: {
                 ...state,
                 email: state.signUpEmail,
                password: state.signUpPassword
                
            }
        })

        Auth.login(data.addUser.token)
      //  window.location.href = `mailto:cui4chinamed@gmail.com?subject=Contact from ${state.firstname} ${state.lastname}&body=${state.message}`
    }
    const handleLogIn = async (event) => {
        event.preventDefault()
        console.log({
            ...state,
            password:state.signUpPassword
        })
        const { data } = await login({
            variables: {
                ...state
            }
        })

        Auth.login(data.login.token)
      //  window.location.href = `mailto:cui4chinamed@gmail.com?subject=Contact from ${state.firstname} ${state.lastname}&body=${state.message}`
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

                                <div className="col-sm-6">
                                    <form onSubmit={handleLogIn} className="form">
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
                                                    <input type="password" value={state.password} onChange={(event) => setState({ ...state, password: event.target.value })} required className="form-control" id="password"
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