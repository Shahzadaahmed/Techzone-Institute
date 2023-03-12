import React, { useState } from "react";
import { MDBBtn, MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logInUser } from "../redux/store/actions/auth-actions/auth-actions";

const Login = () => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);

    // Note: Handeling redux here...!
    const dispatch = useDispatch();

    // Note: Funtion to submit form...!
    const submitForm = () => {
      let formData = {
        email,
        password
      };
  
      // console.log(formData);
      formData && dispatch(logInUser(formData));
    };

  return (
    <>
      <div className="form_bg">
        <div className="formBlock">
          <h3>Login</h3>
          <div className="formGrid">
            <div className="form_group">
              <MDBInput
                type="email"
                id="form1Example1"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form_group">
              <MDBInput
                type={seePassword ? "text" : "password"}
                id="form1Example2"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                className="showHide"
                onClick={() => setSeePassword(!seePassword)}
              >
                {seePassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </span>
            </div>
            <ul className="list">
              <li>
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
              </li>
              <li>
                <Link>Forget Password</Link>
              </li>
            </ul>
            <MDBBtn
              color="primary"
              className="submitBtn"
              type="submit"
              onClick={ submitForm }
            >
              Login
            </MDBBtn>

            <p>{err !== "" ? err : ""}</p>
          </div>

          <NavLink to={"/register"} className="accLink">
            Sign up for an account.
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
