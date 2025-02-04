import { NavLink } from "react-router-dom";
import "../resources/css/bootstrap.min.css";
import "../resources/css/Login.css";
import "../resources/js/bootstrap.bundle.min.js";
import CmsInputs from "../components/cms/CmsInputs.js";

function Login() {
  return (
    <div className="login-page vh-100 d-flex justify-content-center align-items-center">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
      <div className="form-container col-md-4 p-5 rounded-5 border-primary bg-white">
        <h2 className="title text-center mb-4 text-primary">Login Form</h2>
        <form>
          <CmsInputs label="Email address" id="email" type="email"/>
          <CmsInputs label="Password" id="password" type="password"/>
          <p className="input-cont small">
            <button className="forgit-btn btn text-primary p-0 fw-bold">
              Forgot password?
            </button>
          </p>
          <div className="d-grid">
            <NavLink to='/app/home' className="login-btn btn btn-primary fw-bold" type="submit">
              Login
            </NavLink>
          </div>
        </form>
        <div className="mt-3">
          <p className="mb-0 text-center">
            Don't have an account
            <NavLink to='/register' className="signup-btn btn text-primary fw-bold p-0 m-0">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;
