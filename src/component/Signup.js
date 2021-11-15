import { Link, useHistory } from "react-router-dom"; //ligne: 86 Ligne:24
import Login from "./Login"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const history = useHistory();
  let user = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [val, setVal] = useState(user);  //objet:user.

  const hundleCh = (e) => {
    e.preventDefault();  //ne pas actualiser la page
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });  // appelle a la valeur ajouter dans une input
  };




  const hdlSub = (e) => {
    e.preventDefault(); 
    localStorage.setItem("email",val.email)
   
    axios.post("http://localhost:300/users", val).then(history.replace("/Home"));

  };

  return (
    <div>
      <div className="container ">
        <div className="">
          <div className="col">
            <div className="col mt-5">
              <div className="header w-50">
                <h2>Sign up</h2>
              </div>
              <form action="" onSubmit={hdlSub} className="login-email w-50">
                <div className="  justify-content-center">
                  <div className="col form-group mt-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={hundleCh}
                    />
                  </div>
                  <div className="col form-group mt-3">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={hundleCh}
                    />
                  </div>
                  <div className="col form-group mt-3 ">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={hundleCh}
                    />
                  </div>
                  <div className="col form-group mt-3">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password"
                      name="cpassword"
                      onChange={hundleCh}
                    />
                  </div>
                  <div className="col form-group mt-3 ">
                    <button
                      className="btn btn-outline-block btn-primary mb-5"
                     
                      name="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
                <p>
                  Have an account?{" "}
                  <Link to="Login"><a>Login Here </a></Link>
                  .
                </p>
              </form>
            </div>
          </div>
          <div className="col  mt-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
