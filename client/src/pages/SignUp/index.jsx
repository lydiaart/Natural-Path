import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import "./index.css";
import Auth from "../../utils/auth";

const SignUp = () => {
    const [formState, setFormState] = useState({
      phone: "",
      email: "",
      password: "",
      firstName:"",
      lastName:""
    });
  
    const [addUser] = useMutation(ADD_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <main>
        <div>
          <div className="title">
            <h3>Sign Up</h3>
          </div>
  
          <div className="form-inputs">
            <form onSubmit={handleFormSubmit}>
              <input
                placeholder="Your first name."
                name="firstName"
                type="firstName"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
               <input
                placeholder="Your last name."
                name="lastName"
                type="lastName"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
              <input
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <input
                placeholder="Phone Number"
                name="phone"
                type="phone"
                id="phone"
                value={formState.phone}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>       
             </div>
      </div>
    </main>
  );
}
export default SignUp;
