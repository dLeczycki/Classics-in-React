import React from "react";

import "./Modal.css";

const Modal = ({ children, title, handleOnClose, handleOnOk }) => {
  return (
    <>
      <div className="modal-gray-background"></div>
      <section className="modal">
        <header>
          <h1>{title}</h1>
          <button onClick={handleOnClose} className="close">
            X
          </button>
        </header>
        <main>{children}</main>
        <footer>
          <button onClick={handleOnClose} className="close">
            Close
          </button>
          <button onClick={handleOnOk} className="ok">
            Ok
          </button>
        </footer>
      </section>
    </>
  );
};

export default Modal;
