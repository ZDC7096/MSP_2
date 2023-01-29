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
      <div id="yo" style={{minHeight: "100vh", backgroundColor: "#FCFCFC", marginLeft: "10vw", marginRight:"10vw", paddingTop:"20px"}}>
      <div className="container mt-5">
        <h2 className="mb-3">Contact the Developers</h2>
        <form onSubmit={submitEmail}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <div>
            <input
           placeholder="Name"
           onChange={handleStateChange}
           name="name"
           value={mailerState.name}
         />
          </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <div>
            <input
           placeholder="Email"
           onChange={handleStateChange}
           name="email"
           value={mailerState.email}
         />
         </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <div>
            <textarea
           placeholder="Message"
           onChange={handleStateChange}
           name="message"
           value={mailerState.message}
         />
         </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      </div>
    )
  }


  export default ContactForm;