import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  console.log(createUser);

  let handleRegister = (e)=>{
    e.preventDefault();
        let form = e.target;

     let email = form.email.value;
     let password = form.password.value;

     createUser(email,password)
     .then(result=>{
        console.log(result.user)
     }).catch(error=>{
        console.log(error)
     })

  }


  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl my-12">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register now!</h1>

        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" name="name" placeholder="name" />

          <label className="label">Address</label>
          <input type="text" className="input" name="address" placeholder="address" />

          <label className="label">Phone number</label>
          <input type="text" className="input" name="phone" placeholder="phone" />

          <label className="label">photo </label>
          <input type="text" className="input" name="photo" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
