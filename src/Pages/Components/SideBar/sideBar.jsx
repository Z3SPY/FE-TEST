import './sidebar.css';
import React, { useState, PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import templates from '../TextContainer/InnerComponents/InnerButtonContainer/template';


//Template Class for Prompt Templates
class Template {
  constructor(VAL, ID) {
    this.id = ID;
    this.value = VAL;
  }
  get getValue() {
    return this.value;
  }
  get getID() {
    return this.id;
  }
}

function Sidebar(props) {

  const [ width, setWidth ] = useState('75%');


  // Create CHAT BUTTON Functon START
  let listPrompts = props.promptsHolder; // Contains the object class
  let containerArr = [...listPrompts.promptsArr]; // Use the function promptsArr to get array of prompts

  const changePage = () => {
    console.log("Change page");
    console.log(containerArr);
    props.changePageFunction();
  };
  
  const [curID, setID] = useState(0); // Current ID selected for CHAT BUTTON in the sidebar


  //Prompt Button Function
  function PromptBtn(props) {
    
    let buttonState = props.state;

    //Check if Button is SELECTED or NOT
    function activateButton() {

      //Checks for similar ID
      //Change for Better ID Function this is just a template
      for (let i = 0; i < containerArr.length; i++) {
        if (props.getID != containerArr[i].getID) {
          containerArr[i].active(false);
        } else {
          console.log(containerArr[i].getID);
          setID(containerArr[i].getID);
        }
        
      }
      
      props.active(true);
      changePage();
     
    }
  
    return (
      <li onClick={activateButton}>
        <div className={!buttonState ? "prompText-Container" : "promptText-Container activePrompt"}>
          <a href="#" style={!buttonState ? null : { 'width': width }}> {props.listPrompts[0]} 
           {!buttonState ? null : <Button className="DeleteBtn" onClick={() => {
            
            listPrompts.deletePrompt(curID);
            changePage();

            return null;

          }}> <img src = "trashcan.svg" alt="My Happy SVG"/> </Button>}</a>

        </div>
      </li>
    )
  }
  // Create CHAT BUTTON Functon END


  // Create TEMPLATE BUTTON Function START
  let listTemplates = [];
  const [templateID, setIDTemp] = useState(0); // Current ID selected for CHAT BUTTON in the sidebar

  function populateTemplate() {

    templates.forEach((t) => {
      let tempCont = new Template( t.content, templateID); 
      listTemplates = [...listTemplates, tempCont];
    })

    console.log(listTemplates);
  }

  populateTemplate();


  function promptTemplate(props) {    

    const handleClick = () => {
      //Click On Value to Text Areas
      document.getElementById('PromptTextArea').value = props.getValue;
    }

    return (
      <li>
        <div className="prompText-Container">
          <a href="#" onClick={handleClick} > {props.getValue} </a>

        </div>
      </li>
    );
  }
  // Create TEMPLATE BUTTON Function END


  function LeftSideBar() {
    return(
      <nav id="sidebar">

        <div className="sidebar-header">
            <Button className="promptBtn" onClick={props.newPromptFunction}>NEW CHAT</Button>
        </div>

        <ul className="components">
          {containerArr.map(PromptBtn)}
        </ul>
        
        <Button className="profileBtn">
          <p>USERNAME</p>
          <div className="SamplePic">
          </div>
          <div className="profileBtnContent"> 
              <Button onClick={props.logOut}> LOG OUT</Button>
          </div>
        </Button>
        
      </nav>
    );
  }

  function RightSideBar() {
    return(
      <nav id="sidebar" className="promptSideBar">
        <div className="sidebar-header">
            <Button className="promptBtn" >THIS IS A SEARCH BAR</Button>
        </div>
        <ul className="components prmptSBFix">
          {listTemplates.map(promptTemplate)}
        
        </ul>
      </nav>
    );
  }


  return (
    <div>
      <LeftSideBar />
      <RightSideBar />
    </div>
  );
}

export default Sidebar;
