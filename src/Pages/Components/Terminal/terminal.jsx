import './terminal.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";



function Terminal(props) {
  
  const submitFunction = () => {
    // your logic here
    props.submitFunction();
  };

  useEffect(() => {
    const keyDownHandler = event => {
      //console.log('User pressed: ', event.key);
      if (event.key === 'Enter') {
        event.preventDefault();
        submitFunction();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  return (
    <div className="container">
      <div className="fixed-bottom text-box">
        <div className="form-group">
          <textarea className="form-control" id="PromptTextArea" rows="1" placeholder="send a message" ></textarea>
        </div>
        <Button className="Submit-Btn" onClick={props.submitFunction}>Submit</Button>
      </div>
    </div>
  );
}

export default Terminal;
