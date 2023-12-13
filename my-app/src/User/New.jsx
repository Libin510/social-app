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

function New() {
  const [title, settitle] = useState("");
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");

  const nav = useNavigate();
 

  const Createpost = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const values = await axios.post(
        "http://localhost:5000/post",
        {
          title,
          content,
          caption,
          author,
        },
        config
      );
      setMessage("post created successfully!");
      
      nav("/home");
    } catch (error) {
      console.log("couldn't Post", error);
      alert("already exist");
    }
  };
  console.log(content);

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
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-column align-items-center mb-4">
                  <MDBIcon fas icon="lock" size="lg" className="mb-3" />

                 
                  <MDBInput
                    label="Image url"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Title"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    label="Caption"
                    id="form2"
                    type="email"
                    onChange={(e) => setCaption(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Author"
                    id="form4"
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>

                <Link to="/home">
                  <MDBBtn className="mb-4" size="lg" onClick={Createpost}>
                    create
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

export default New;
