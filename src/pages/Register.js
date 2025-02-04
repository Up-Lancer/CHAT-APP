import { NavLink } from "react-router-dom";
import "../resources/css/Login.css";
import CmsInputs from "../components/cms/CmsInputs";

function Register() {
  return (
    <div className="login-page vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="form-container col-md-4 p-4 rounded-5 border-primary bg-white">
          <h2 className="title text-center mb-3 text-primary">
            Create account
          </h2>
          <form>

          <CmsInputs label="Your Name" id="name" type="text" placeholder="Enter Your Name"/>
          <CmsInputs label="Email address" id="email" type="email" placeholder="Enter Email"/>
          <CmsInputs label="Phone Number" id="phone" type="text" placeholder="Enter Phone Number"/>
          <CmsInputs label="Password" id="password" type="password" placeholder="Enter Password"/>
          <CmsInputs label="Confirm Password" id="Confirm-password" type="password" placeholder="Confirm password"/>

            <div className="d-grid">
              <button
                className="login-btn btn btn-primary fw-bold"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
                      <NavLink to='/login' className="signup-btn btn text-primary fw-bold p-1 m-0 bg-none">
                        I Have Account
                      </NavLink>
                  
        </div>
      </div>
    </div>
  );
}
export default Register;
