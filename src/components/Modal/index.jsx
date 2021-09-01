import React from "react";
import "./styles.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalScreen() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div>

      <button onClick={() => setIsOpen(true)}>Lista de compras</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before",
        }}
        className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >


        <button onClick={() => setIsOpen(false)}>X</button>
      </Modal>
    </div>
  );
}
