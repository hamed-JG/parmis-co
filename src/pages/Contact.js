import React from "react";
import AccessBar from "../Components/static/Contact/accessBar/AccessBar";
import Form from "../Components/static/Contact/form/Form";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "60px",
      }}
    >
      <AccessBar />
      <Form />
    </div>
  );
}

export default Contact;
