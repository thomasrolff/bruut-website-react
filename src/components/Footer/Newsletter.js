import React from 'react';
import Mailchimp from "react-mailchimp-form";
import './Newsletter.scss';

function Newsletter() {
  return (
    <Mailchimp
      action={process.env.REACT_APP_MAILCHIMP_URL}
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'EMAIL ADDRESS',
          type: 'email',
          required: true
        }
      ]}
      messages = {
        {
          // sending: "Sending...",
          success: "Thank you for subscribing!",
          duplicate: "You already subscribed to our newsletter.",
          error: "An unexpected internal error has occurred.",
          // empty: "Please fill in you email",
          button: "Join"
        }
      }
      // Add a personalized class
      className='mailchimp-form'
      />
  );
}

export default Newsletter;
