import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "../assets/Css/contact.css";
import { connect } from "react-redux";
import { ContactInfo } from "../Redux/actions";
import { Container, Row, Col, Table } from "react-bootstrap";

//For get data from firebase

const fetchBlogs = async () => {
  const response = db.collection("contacts");
  const data = await response.get();
  return data.docs;
};
//End Section

function Contact({ setContact, info }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Add Data to Firebase Database
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been Submitted...!");
      })
      .catch((error) => {
        alert(error.message);
      });
    e.target.reset();
    //End of Firebase Section
  };

  let dataBlog = fetchBlogs();
  useEffect(() => {
    dataBlog
      .then((item) => item.map((info) => info.data()))
      .then((newInfo) => setContact(newInfo));
  }, [dataBlog]);

  //firebase get data end

  return (
    <Container style={{ maxWidth: "1200px" }}>
      <Row>
        <Col sm={4}>
          <form className="form" onSubmit={handleSubmit}>
            <h1
              style={{
                transform: "rotate(270deg)",
                position: "absolute",
                left: "-165px",
              }}
            >
              Contact form
            </h1>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Email</label>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <label>Message</label>
            <textarea
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              style={{ resize: "none" }}
            ></textarea>
            <button>Submit</button>
          </form>
        </Col>
        <Col
          className="table-column"
          sm={7}
          style={{
            position: "relative",
            top: "150px",
            left: "130px",
            height:'500px'
          }}
        >
          <Table className="contact-table table" striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {info &&
                info.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td
                      style={{
                        width: "100%",
                        display: "flex",
                        lineBreak: "anywhere",
                        maxWidth: "350px",
                      }}
                    >
                      {item.message}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  info: state.contactInfo,
});
const mapDispatchToProps = (dispatch) => ({
  setContact: (info) => dispatch(ContactInfo(info)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
