import './textContainer.css';
import InnerButtonContainer from './InnerComponents/InnerButtonContainer/innerButtonContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function CreateTextCard(props) {
  return (
    <div className="row">
      <div className="card text-Container">
            <div className="card-body">
              <h5 className="card-title convoBox">{props.textItem}</h5>
            </div>
          </div>
    </div>
  );
}


function TextContainer(props) {

  const classUpdate = props.arrItem.length == 0 ? "container" : "convo-container";

  return (
    <div className={classUpdate} id="convo-content">
      {props.arrItem.length == 0 ? <InnerButtonContainer /> : 
      <div> {props.arrItem.map((item) => {return ( <CreateTextCard textItem={item} />)})}
      </div>}
    </div>
  );
} 

export default TextContainer;
