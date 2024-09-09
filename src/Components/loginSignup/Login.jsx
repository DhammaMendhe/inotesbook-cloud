import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authtoken);
      console.log("Token saved successfully.");
      props.showalert("logged in successfully","success");
      navigate("/home");
      // if(localStorage.getItem('token')){
      //   <> user information </>
      // }else{
  
      // }

    } else  {
      props.showalert("invalid credetials","danger");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-3">
      <h1>login for using iNotebook app</h1>
    <div className="d-flex justify-content-center  h-75">
      <form className=" w-50  my-5" onSubmit={handleSubmit}>
        <div className="form-group mt-4 ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control mt-3"
            value={credentials.email}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            minLength={5}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mt-4 ">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control mt-3"
            value={credentials.password}
            name="password"
            id="password "
            placeholder="Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
      
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
