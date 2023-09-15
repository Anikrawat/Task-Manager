import React from "react";
import { useGlobalContext } from "./context";
import Alert from './Alert'


const Register = () => {
  let {
    getUserData,
    userData,
    putData,
    registerAlert
  } = useGlobalContext();


  return (
    <>
    {registerAlert && <Alert title = "Password Did Not Match" typeOf = "danger"/>}
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Task Manager
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={putData}>
                        <div id="sign-in-button"></div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">
                              Your Username
                            </label>
                            <input
                              type="text"
                              name="Name"
                              value={userData.Name}
                              onChange={getUserData}
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Username"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              name="Email"
                              value={userData.Email}
                              onChange={getUserData}
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Email Id"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              name="Password"
                              value={userData.Password}
                              onChange={getUserData}
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4cd">
                              confirm password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              name="confirmPassword"
                              value={userData.confirmPassword}
                              onChange={getUserData}
                              className="form-control"
                              placeholder="Confirm Password"
                              required
                            />
                          </div>
                        </div>
                        <div
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 sign-in-button"
                        >
                          <button
                            type="Submit"
                            class="btn btn-primary"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
