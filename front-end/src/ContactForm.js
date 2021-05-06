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
    const adress = document.getElementById("adress").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        phonenumber: phonenumber,
        message: message,
        adress: adress
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        this.successForm;
       // alert("The Message was sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
      }
    });
  }

  successForm() {
    document.getElementById("contact-form").innerHTML = "Спасибо за доверие, с вами свяжутся в течение двух минут"
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
              placeholder="Ваше имя*"
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
            placeholder="Номер телефона для связи*"
          />
        </div>
        </Form.Group>
        <Form.Group>
        <div className="form-group">
         
          <input
            className="form-control"
            rows="2"
            id="adress"
            placeholder="Укажите адрес для подъезда катафалка"
          />
        </div>
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <div className="form-group">
            <textarea 
              className="form-control" 
              rows="5" id="message" 
              placeholder="По вашему желанию укажите дополнительные сведения - 
              например фамилию имя отчество и дату рождения умершего, особенности его транспортировки,
              этажность жилого дома и т.д.">
            </textarea>
          </div>
        </Form.Group>
        <Button variant="secondary" type="submit" className="btn btn-primary d-block ml-auto btn-block" size='lg'>
          ОТПРАВИТЬ
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
