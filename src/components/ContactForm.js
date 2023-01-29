import React from 'react';
import { useState } from 'react';
const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  });


  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }


  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };



    return (
      <div className="container mt-5">
        <h2 className="mb-3">Contact the Developers</h2>
        <form onSubmit={submitEmail}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
           placeholder="Name"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
         />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
           placeholder="Email"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
         />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
         />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }


   



  export default ContactForm