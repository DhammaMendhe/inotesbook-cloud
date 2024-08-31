import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleClick = async (e) => {
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
      navigate("/home");
    } else {
      alert("invalid credentials");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center  h-75">
      <form className="border w-50  my-5" onSubmit={handleClick}>
        <div className="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group ">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            name="password"
            id="password "
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
