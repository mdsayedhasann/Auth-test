import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const showToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked;

    if (password.length < 6) {
      return toast.error("Password must be at least 6 charecter or longer", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Must be use at least one Capital letter", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/[0-9]/.test(password)) {
      return toast.error("Must be use at least one number", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!checked) {
      return toast.error("You should accept the Terms of Service", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    createUser(email, password)
      .then((result) => {
        e.target.reset();
        toast.success("Welcome to Auth Test Website", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
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

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <p className="absolute right-4 top-3" onClick={showToggle}>
                  {
                      showPassword ? 'Hide' : 'Show'
                  }
                </p>
              </div>
            </div>

            <div className="flex justify-start gap-8">
              <label className="label">
                <input
                  type="checkbox"
                  name="terms"
                  className="input input-bordered"
                />
                <span className="label-text ml-3">
                  Accept{" "}
                  <a className="text-blue-400" href="#">
                    Terms of Service
                  </a>{" "}
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="py-3">
            <p>Already Have a Account?</p>
            <Link className="text-blue-400" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
