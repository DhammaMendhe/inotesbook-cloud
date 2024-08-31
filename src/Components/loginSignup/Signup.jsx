import React, { useState } from "react";

export default function Signup() {

  // const initialuser = [];

  // const [user,setUser ] = useState(initialuser);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   console.log("this is fetch");

  //   const response = await fetch("http://localhost:5000/api/auth/createuser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token":
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVlZjgyYWFiYzJiNTkwZTVhZjk4In0sImlhdCI6MTcyMzIyNzk2OH0.UjQsb4BpYntRfmR-e4qvMAefi1piGcP4Tl_S1ko9zaI",
  //     },
  //     body:JSON.stringify({name,email,password})
  //   });

  //   const json = await response.json();
  //   console.log(json);
    

  // };


  // const onChange = (e) => {
  //   setUser({ ...note, [e.target.name]: e.target.value });
  // };
  // return (
  //   <div>
  //     <form className="border w-50  my-5" onSubmit={handleClick}>
  //       <div className="form-group ">
  //       <div className="form-group ">
  //         <label for="exampleInputPassword1">Name</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           name="Name"
  //           id="Name"
  //           placeholder="Name"
  //           onChange={onChange}
  //         />
  //       </div>
  //         <label for="exampleInputEmail1">Email address</label>
  //         <input
  //           type="email"
  //           className="form-control"
  //           name="email"
  //           id="email"
  //           aria-describedby="emailHelp"
  //           placeholder="Enter email"
  //           onChange={onChange}
  //         />
  //         <small id="emailHelp" className="form-text text-muted">
  //           We'll never share your email with anyone else.
  //         </small>
  //       </div>
  //       <div className="form-group ">
  //         <label for="exampleInputPassword1">Password</label>
  //         <input
  //           type="password"
  //           className="form-control"
  //           name="password"
  //           id="password"
  //           placeholder="Password"
  //           onChange={onChange}
  //         />
  //       </div>
  //       <div className="form-check">
  //         <input
  //           type="checkbox"
  //           className="form-check-input"
  //           id="exampleCheck1"
  //         />
  //         <label className="form-check-label" for="exampleCheck1">
  //           Check me out
  //         </label>
  //       </div>
  //       <button  type="submit" className="btn btn-primary">
  //         Submit
  //       </button>
  //     </form>
    // </div>
  // );
}
