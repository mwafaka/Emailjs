
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import env from "react-dotenv";



 const App = () => {
  const form = useRef();
  const sendEmail = (e) => {
	  alert('your msg was send it ')
    e.preventDefault();
	emailjs.sendForm(env.SER, env.TEM, form.current, 
		env.USERID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div style={{width:'400px',margin:'5%',padding:'80px'}}>  

    <form  ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    </div>



  );
};
export default App
