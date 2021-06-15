import { useState } from "react";
import Modal from "../Modal";

import "./ModalOpener.css";

function ModalOpener() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isRequestAccepted, setIsRequestAccepted] = useState(false);
  const modalTitle = "Form";
  const modalContent = <p>This is simple message to accept with modal</p>;

  const handleOnClose = () => {
    setIsModalOpened(false);
  };

  const handleOnOk = () => {
    setIsModalOpened(false);
    setIsRequestAccepted(true);
  };

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  return (
    <main className="app">
      <button className="open-modal" onClick={handleOpenModal}>
        Open modal
      </button>
      {isModalOpened && (
        <Modal
          title={modalTitle}
          handleOnClose={handleOnClose}
          handleOnOk={handleOnOk}
        >
          {modalContent}
        </Modal>
      )}
    </main>
  );
}

export default ModalOpener;
