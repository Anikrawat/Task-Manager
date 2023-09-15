import React from "react";
import "./Form.css";
import {app} from '../Firebase'
import { signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";

const Form = () => {
  
  let {signInData,getSignInData,gettingTheData} = useGlobalContext()
 
  const history = useNavigate()

  const auth = getAuth(app)

  const SigningIn = (e) => {
    e.preventDefault();


    signInWithEmailAndPassword(auth,signInData.Email,signInData.Password).then((result) => {
      gettingTheData();
      history(`/Link/${result.user.uid}`)
    }).catch((err) => {
      alert(err)
    })
  }

  return (
    <>
      <div
        className="mainContainer d-flex justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh"}}
      >
        <div
          className="d-flex bg-white flex-column justify-content-start align-items-center rounded"
          style={{ height: "66vh", width: "26vw" }}
        >
          <div
            className="d-flex justify-content-center "
            style={{ width: "30vw", height: "4vh" }}
          >
            <span
              style={{
                color: "Black",
                fontSize: "2em",
                fontFamily: "'poppins', sans-serif",
                margin: "30px 20px ",
              }}
            >
              Task Manager
            </span>
          </div>

          <div className="d-flex flex-column">
            <form id="contactForm" onSubmit = {(e) => SigningIn(e)}>
              <div className="mb-3">
                <label HTMLfor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  onChange={getSignInData}
                  value={signInData.Email}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email Id"
                  required
                />
              </div>
              <div className="mb-3">
                <label HTMLfor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  onChange={getSignInData}
                  value={signInData.Password}
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>
            
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "20vw" }}
              >
                Submit
              </button>
              
            </form>
            <div id="emailHelp" className="form-text">
              <Link to="/ForgotPassword" className="passwordForgotten">
                Forgot Password?
              </Link>
            </div>
            <div
              id="emailHelp"
              className="form-text d-flex justify-content-center"
              style={{ margin: "20px 0px" }}
            >
              <span>Not a Member?</span>
              <Link to="/register" className="passwordForgotten">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
