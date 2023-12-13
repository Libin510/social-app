import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [Image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setname] = useState("");
  const nav = useNavigate();

  const userregister = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const values = await axios.post(
        "http://localhost:5000/register",
        { Image, Name, email, password },
        config
      );

      console.log(values.data);
      localStorage.setItem("user", JSON.stringify(values.data));

      nav("/");
    } catch (error) {
      console.log("couldn't signup", error);
      alert("user already exist");
    }
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-column align-items-center mb-4">
                  <MDBIcon fas icon="lock" size="lg" className="mb-3" />
                  <MDBInput
                    label="Image url"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={(e) => setImage(e.target.value)}
                  />
                  
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Email"
                    id="form2"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="password"
                    id="form4"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Link to="/photo">
                  <MDBBtn className="mb-4" size="lg" onClick={userregister}>
                    Register
                  </MDBBtn>
                </Link>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
