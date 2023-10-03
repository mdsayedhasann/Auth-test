import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [successLogin, setSuccessLogin] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    setSuccessLogin("");
    setErrorLogin("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setSuccessLogin("Login Success");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setErrorLogin("Login Failed");
      });

    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col text-center justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login Now</h1>
        </div>
        <div className="card flex-shrink-0  w-[400px] shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
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

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {<p className="text-3xl text-green-500">{successLogin}</p>}
          {<p className="text-red-600">{errorLogin}</p>}
          <div className="py-3">
            <p className="py-3">New in this website?</p>
            <span className="bg-blue-700 py-2 px-3 rounded my-20 text-white">
              <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
