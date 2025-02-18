import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Loader from "./../Loader/Loader";
function NotificationDisplay({ message }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    // setTimeout(() => {
    //   setShow(true);
    // }, 4000);
  };
  console.log("notification compp call");
  return (
    <div>
      {message == "" ? null : (
        <div
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "fixed",
            top: 5,
            right: 5,
            zIndex: 1000,
            backgroundColor: "#B9935B", // Set the background color here
          }}
        >
          <Toast show={show} autohide={false} onClose={handleClose}>
            <Toast.Header>
              <strong className="mr-auto ml-5"></strong>
            </Toast.Header>
            <Toast.Body>
              {message == "wait stripe payment load" ? <Loader /> : message}
            </Toast.Body>
          </Toast>
        </div>
      )}
    </div>
  );
}

export default NotificationDisplay;
