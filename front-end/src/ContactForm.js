// https://medium.com/@binhchung48/create-a-contact-form-with-nodemailer-react-js-and-express-js-7757d41e2448

import React, { Component } from "react";
import axios from "axios";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        phonenumber: phonenumber,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <Form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <Form.Group controlId="formBasicName">
          <div className="form-group">
          
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Напишите ваше имя"
            />
          </div>
        </Form.Group>
        <Form.Group>
        <div className="form-group">
         
          <input
            type="phonenumber"
            className="form-control"
            id="phonenumber"
            aria-describedby="phonenumber"
            placeholder="Напишите ваш номер телефона для связи"
          />
        </div>
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
        <div className="form-group">
         
          <textarea className="form-control" rows="5" id="message" placeholder="В случае необходимости укажите дополнительную информацию"></textarea>
        </div>
        </Form.Group>
        <Button variant="warning" type="submit" className="btn btn-primary" size='lg'>
          Вызвать агента
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
