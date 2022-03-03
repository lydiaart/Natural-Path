import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import "./index.css";
import Auth from "../../utils/auth"
const Login = () => {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login] = useMutation(LOGIN);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: { ...formState },
          
        });

        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    };
    return (
        <div className="container ">
            <div className="row">
                <div className="col-6">
                    <div className="single-contact-box">
                        <div className="contact-form">
                           
                                        <h3> Login</h3>
                                        <div className="row">
                                            <div className="col-sm-10 col-xs-12 col-centered ">
                                            <form onSubmit={handleFormSubmit}>
            <input
              placeholder="Your e-mail"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
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
            
    
     ) }

export default Login;