import TextContainer from '../Components/TextContainer/textContainer.jsx';
import Terminal  from '../Components/Terminal/terminal.jsx';
import Sidebar from '../Components/SideBar/sideBar.jsx';
import Login from '../Login/login.jsx';

import './App.css';
import React, { useState } from "react";



//Update This to Change terminal
let promptlist = new Array();

// Prompt Object (Contains the list of conversations)
class prompt {
  constructor(textArr, state, promptID) {
    this.id = promptID;
    this.selected = state;
    this.valueArr = textArr;
  }
  update(newValueArr) {
    this.valueArr = newValueArr;
  }
  active(newState) {
    this.selected = newState;
  
  }
  get listPrompts() {
    return this.valueArr;
  }
  get state() {
    return this.selected;
  }
  get getID() {
    return this.id;
  }
}

// (Contains the list of contained prompts)
class promptObjects {
  constructor() {
    this.prompts = []
  }
  addPrompt(prompText) {
    let p = prompText;
    this.prompts.push(p);
    return p;
  }

  deletePrompt(id) { 
    console.log("Delete prompt id no: " + id);
    for (let i = 0; i < this.prompts.length; i++) {
      if (this.prompts[i].getID == id)
        this.prompts.splice(i, 1); // removes the one item from index position 
 
    }
  }

  get promptsArr() {
    return this.prompts;
  }
}

const objectsClass = new promptObjects(); // Creates new prompt Objects stroes prompt lists





function CreateApp(props) {
  return (
    <div className="App">
      <Sidebar logOut={props.logoutFunc} promptsHolder={props.promptsArr} newPromptFunction={props.nPF} changePageFunction={props.cPF}/>
      <header className="App-header" id="content">
        <TextContainer arrItem={props.Items}/> 
        <Terminal submitFunction={props.submitFunc}/>      
      </header>
    </div>
  )
}



function App() {

  function updateList() {
    for (let i = 0; i < objectsClass.promptsArr.length; i++) {
      if (objectsClass.promptsArr[i].state == true) {
        objectsClass.promptsArr[i].update(promptlist);
      }
    }
  }

  //Submit Terminal hook
  const [inputText, setIsClicked] = useState("");


  function changePage() {
    for (let i = 0; i < objectsClass.promptsArr.length; i++) {
      if (objectsClass.promptsArr[i].state == true) {
        promptlist = [...objectsClass.promptsArr[i].listPrompts];
        console.log("Current ID: " + objectsClass.promptsArr[i].getID);

      }
    }

    addItem();
  }

  function submitPrompt() {
    
    //Checks if first prompt
    const promptValue = document.getElementById("PromptTextArea").value;
    if (promptValue != "") {

      setIsClicked(promptValue);

      promptlist.push(promptValue);
      addItem();
      document.getElementById("PromptTextArea").value = "";
      //console.log(promptlist);
      updateList();
    }
  }
  


  //Add Item to Terminal hook
  const [items, setItems] = useState([]);
  const [canCreateNewState, canCreateNewFunct] = useState(false);
  const [itemID, setID] = useState(0);

  //Placeholder
  function updateID() {
    let newID = itemID;
    newID++;
    setID(newID);
  }


  //For creating NEW Prompts//Conversation
  function newPromptButton() {


    if (canCreateNewState === false && objectsClass.promptsArr.length != 0) {
      canCreateNewFunct(true);
      updateID(); // Set new ID
      updateList();
      promptlist = [];
      addItem();
      console.log(canCreateNewState);

    }
        
  }


  


  function addItem() {

        setItems([...promptlist]);

        //Adds promps to side bar
        if (objectsClass.promptsArr.length == 0) {
          objectsClass.addPrompt(new prompt([...promptlist], true, itemID));

          if (canCreateNewState === true) {
            canCreateNewFunct(false);
          }
        } else {  
            if (canCreateNewState === true) {
              canCreateNewFunct(false);
              //reset selected
              objectsClass.promptsArr.forEach((obj) => {
                if (obj.state == true) {
                  obj.active(false);
                }
              })
              //changes the selccted of the new prompt
              objectsClass.addPrompt(new prompt([...promptlist], true, itemID));

            }
        }
      
  }

  //Login hook
  const [loginState, login] = useState(false);

  function logoutFunction() {
    console.log("Logging out");
    login(false); 
  }

  function submitCredentials(data) {

    // Change later, as of right now these act as placeholders
    let email;
    let password;


    if (data != null) {
      login(true);
      email = data.email;
      password = data.email;
      console.log("my data: " + data);

    } else {
      //Play Something when fails
      console.log("Failed Log in");
    }


  }


  return (  
    <div>
      {loginState ? <CreateApp logoutFunc={logoutFunction} submitFunc={submitPrompt} nPF={newPromptButton} Items={items} promptsArr={objectsClass} cPF={changePage}/> : <Login loginFunction={submitCredentials} />}
    </div>
  );
}

export default App;
