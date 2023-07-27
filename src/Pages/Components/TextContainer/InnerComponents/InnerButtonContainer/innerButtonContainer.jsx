import './innerButtonContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import templates from './template';
import React from 'react'





function Card() {

    return( 

        <div style={{ cursor: 'pointer' }} className="card card-attributes">
          <div className="card-body">
            <p className="card-text">
              To create a new conversation, you can <u> choose a prompt</u> or <u>write a new one in the terminal below</u>"
            </p>
          </div>
        </div>


    );
}

function innerButtonContainer() {
   
  return (
    <div className="container">
    <h2>Welcome to HighlyGPT</h2>
    <h5 className="title">The Essential AI assistant for HSI Employees</h5>
      <div className="disc-cont">
          <Card />
      </div>
    </div>
  );
}

export default innerButtonContainer;
