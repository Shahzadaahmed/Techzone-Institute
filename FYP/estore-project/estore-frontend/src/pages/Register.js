import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/store/actions/auth-actions/auth-actions";

const Register = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [seePassword, setSeePassword] = useState(false);

  // Note: Handeling redux here...!
  const dispatch = useDispatch();

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


  const imageOnChange = async (e) => {
    let fileData = e.target.files[0];
    // console.log("Image Data: ", fileData);

    if (fileData) {
      let res = await toBase64(fileData);
      console.log("Res: ", res);
      res && setProfileImage(res);
    };
  };

  // Note: Funtion to submit form...!
  const submitForm = () => {
    let formData = {
      name,
      profileImage,
      number,
      email,
      password,
      role: "customer"
    };
    formData.contactNo = formData.number;
    delete formData.number;

    // console.log(formData);
    formData && dispatch(signUpUser(formData));
  };

  return (
    <>
      <div className="form_bg">
        <div className="formBlock">
          <h3>Register</h3>
          <img
            src={profileImage ? profileImage : null}
            alt="Profile"
            height={'100px'}
            width={'100px'}
          />

          <div className="formGrid">
            <div className="form_group">
              <MDBInput
                type="text"
                id="form3Example1"
                label="Full name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form_group">
              <MDBInput
                type="tel"
                id="form3Example2"
                label="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </div>
            <div className="form_group">
              <MDBInput
                type="email"
                id="form3Example3"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="form_group">
              <MDBInput
                type={seePassword ? "text" : "password"}
                id="form3Example4"
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

            <div className="form_group">
              <MDBInput
                type="file"
                id="form4Example3"
                onChange={imageOnChange}
              // value={email}
              />
            </div>
          </div>
          <MDBBtn
            color="primary"
            className="submitBtn"
            type="submit"
            onClick={submitForm}
          >
            Register
          </MDBBtn>
          <p>{err !== "" ? err : ""}</p>
          <NavLink to={"/ "} className="accLink">
            Already registered, login here.
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Register;
