import { Link } from "react-router-dom"; 
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import "./index.css";
import Auth from "../../utils/auth"
function Login() {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const [login] = useMutation(LOGIN)


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
                                                <Link to={{ pathname: "/Profile"}} ><button 
                          className="contact-btn" 
                          type="submit"
                          onClick={() => handleLogIn()}
                          >Login
                          </button></Link>
                                                </div>
                                                {/* <!--/.single-single-contact-btn--> */}
                                            </div>
                                            {/* <!--/.col--> */}
                                        </div>
                                        {/* <!--/.row--> */}
                                   </div>

                                </div>
                            </div>

                            {/* <!--/form--> */}
                        </div>
                        {/* <!--/.contact-form--> */}
                    </div>
    )
}

export default Login;