import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./Contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k7q817x",
        "template_0ms1wfj",
        form.current,
        "gd1TLT2Z_m1bcR9TF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Get in touch</h1>
        <p>Contact me</p>
      </div>
      <form className="form-container" ref={form} onSubmit={sendEmail}>
        <div className="text-field-container">
          <TextField
            sx={{ maxWidth: "400px" }}
            fullWidth
            id="standard-basic"
            type="text"
            name="user_name"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={{ maxWidth: "400px" }}
            fullWidth
            id="standard-basic"
            type="email"
            name="user_email"
            label="Email"
            variant="outlined"
          />
          <TextField
            fullWidth
            sx={{ maxWidth: "400px" }}
            id="outlined-multiline-static"
            name="message"
            label="Message"
            color="success"
            multiline
            rows={4}
          />
          <Button color="secondary" variant="contained" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
