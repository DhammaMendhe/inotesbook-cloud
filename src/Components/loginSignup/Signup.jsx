import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
export default function Signup(props) {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("this is fetch");
    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if(json.success){
      console.log("Token saved successfully.");

      localStorage.setItem("token",json.authtoken);

      props.showalert("logged in successfully","success");
      navigate("/home");

    }
    else{
      props.showalert("invalid credentials","danger");

    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="mt-3">
      <h1>Ceate an account for using iNotebook app</h1>
    <div className="container d-flex justify-content-center ">
      <form className="border w-50  my-5" onSubmit={handleClick}>

        <div className="form-group ">
          <div className="form-group ">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Name"
              onChange={onChange}
            />
          </div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
