import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
      <div className="hero-content flex-col text-center justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login Now</h1>
        </div>
        <div className="card flex-shrink-0  w-[400px] shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className='py-3'>
              <p>New in this website?</p>
              <Link to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;