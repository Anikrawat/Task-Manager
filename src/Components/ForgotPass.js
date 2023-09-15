import React from "react";
import { useGlobalContext } from "./context";

const ForgotPass = () => {
  let { mailForgotPass, forgotPassMail, forgotPass } = useGlobalContext();

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-dark"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="mb-3 d-flex flex-column justify-content-center align-items-center rounded"
          style={{ backgroundColor: "white", height: "60vh", width: "25vw" }}
        >
          <p>Forgot Password</p>
          <form style={{ marginBottom: "10vh" }} onSubmit={forgotPass}>
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="Email"
              onChange={mailForgotPass}
              value={forgotPassMail}
              id="exampleFormControlInput1"
              placeholder="Enter Your Email"
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "20vw", margin: "20px 0px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
