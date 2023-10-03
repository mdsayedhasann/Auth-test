import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)


    const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    createUser(email, password)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error)
    })

  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col text-center justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card flex-shrink-0  w-[400px] shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="py-3">
            <p>Already Have a Account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
