import React from "react";
import Modal from "react-modal";
import ProductCard from "../ProductCard";
import ShoppingCart from "../ShoppingCart";
import "./styles.css";

Modal.setAppElement("#root");

export default function ModalScreen(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="container-modal">
      <button className="lista" onClick={() => setIsOpen(true)}>
        Lista
      </button>

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
        <div className="container-button">
          <button className="button" onClick={() => setIsOpen(false)}>
            X
          </button>
        </div>

        <ShoppingCart cart={props.cart} setCart={props.setCart} />
      </Modal>
    </div>
  );
}
