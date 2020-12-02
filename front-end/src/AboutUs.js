import React, { useState } from "react";
import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalWindowAboutUs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <>
      <a href onClick={handleShow}>
        О нас
      </a>

      <Modal show={show} onHide={handleClose} centered={true} size={"xl"}>
        <Modal.Header closeButton>
          <Modal.Title>О нас ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Мы работаем давно...</h1>
          <p>Основатель нашего похоронного дома работает в сфере ритуальных услуг с 1985 года и по сути является одним из первопроходцев в области ритуальных услуг в городе Тюмени</p>
          <p>С 2017 года открыт салон магазин ритуальных товаров на Мысу...</p>
          <p>Теперь мы расширяемся и готовимся к открытию филиала нашего Похоронного дома в Патрушева</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindowAboutUs;
