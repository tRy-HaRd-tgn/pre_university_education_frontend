import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const Modal = ({ onClose, children, title }: any) => {
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div onMouseDown={handleCloseClick} className="modal-overlay">
      <div
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
        className="modal-wrapper"
      >
        <div className="modal">
          <div className="modal-header">
            <a href="#" onMouseDown={handleCloseClick}>
              <Image
                src={"/cross.svg"}
                alt="error"
                width={30}
                height={30}
              ></Image>
            </a>
          </div>
          {title && <h1>{title}</h1>}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") as any
  );
};

export default Modal;
