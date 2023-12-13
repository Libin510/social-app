import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarH from "./NavbarH";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";

function Home() {
  const [post, setPost] = useState([]);

  const handleDelete = (id, author) => {
    if (window.confirm(`are you sure want to delete ${author}`)) {
      fetch(`http://localhost:5000/delet/${id}`, {
        method: "DELETE",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("deleted");
        });
    } else {
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getpost");
      const responseData = response.data;
      console.log(responseData);
      setPost(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section>
      <NavbarH />
      <div className="carddv">
        {post.map((item) => (
          <Card className="card">
            <Card.Img className="imgcrd " variant="top" src={item.content} />
            <Card.Body>
              <Card.Title className="titl">{item.author}</Card.Title>
              <Card.Text>{item.title}</Card.Text>
              <Card.Text>{item.caption}</Card.Text>
              <div style={{ display: "flex", gap: "1px" }}>
                <Button className="btn" variant="primary">
                  Edit
                </Button>
                <Button
                  className="btn"
                  variant="primary"
                  onClick={() => handleDelete(item._id, item.author)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Home;
