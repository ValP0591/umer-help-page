import React, { useState } from "react";
import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ContactForm from "./ContactForm";

function ModalWindow() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" size="lg" active="true" onClick={handleShow}>
        ВЫЗВАТЬ АГЕНТА
      </Button>

      <Modal show={show} onHide={handleClose} centered={true} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4>КОНТАКТНАЯ ИНФОРМАЦИЯ</h4>
            <h6 className="text-muted">
              {" "}
              Переданные вами данные защищены политикой конфиденциальности
              полученных от пользователей сведений, разработанных в полном
              соответствии с Федеральным законом "О персональных данных" от
              27.07.2006 N 152-ФЗ. Ваше имя, номер телефона и вся дополнительно 
              сообщённая нам информация будет храниться в зашифрованном виде и 
              автоматически удаляться с сервера по истечении 15 календарных дней.
              {" "}
            </h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
        <Modal.Title>
          <h6 className="text-muted">
            {" "}
            * Поля помеченные зведочкой обязательны к заполнению
            {" "}
          </h6>
        </Modal.Title>
      </Modal>
    </>
  );
}

export default ModalWindow;
