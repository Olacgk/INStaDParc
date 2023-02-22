import React, { useState } from "react";
import "./style.scss";
import Button from "../button";

export default function Modal({ openbtn_text, children }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <Button title={openbtn_text} clicked={toggleModal}/>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {children}
            <Button title={'CLOSE'} clicked={toggleModal}/>
          </div>
        </div>
      )}
    </>
  );
}