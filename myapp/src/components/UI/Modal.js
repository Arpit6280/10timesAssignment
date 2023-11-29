import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
}

export default Modal;
