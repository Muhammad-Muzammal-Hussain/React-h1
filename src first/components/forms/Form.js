/**
|--------------------------------------------------
| my code start
|--------------------------------------------------
*/

// import React,{useState} from 'react'
// import PropTypes from 'prop-types'
// import './Form.css'
// function Textarea(props) {
//     return (
//       <textarea
//         className="form-control container"
//         value={props.text}
//         onChange={props.onChange}
//         id="exampleFormControlTextarea1"
//         rows="8"
//         style={{ fontStyle: props.isItalic ? 'italic' : 'normal' }}
//       />
//     );
//   }

//   export default function Form(props) {
//       const [text,setText] =useState("enter the text here")
//       const [isItalic, setIsItalic] = useState(false);
//     const changeFunc = (event) => {
//         console.log('text is changed')
//         setText(event.target.value)
//     }
//     const upperFunc = () => {
//       let newText=text.toUpperCase()
//       setText(newText)
//     }
//     const lowerFunc = () => {
//         let newText=text.toLocaleLowerCase()
//         setText(newText)
//     }

//     function handleItalic() {
//       setIsItalic(!isItalic);
//     }

//     // setText("new text")// way to change the text

//   return (
//     <div>
//     <h1>{props.heading}</h1>
// <div className="mb-3  my-3">
// <Textarea text={text} onChange={changeFunc} isItalic={isItalic} />

//   <button className="btn btn-primary my-2" onClick={upperFunc}>Change to Upper case</button>
//   <button className="btn btn-primary my-2 mx-3" onClick={lowerFunc}>Change to Lower case</button>
//   <button className="btn btn-primary my-2 mx-3" onClick={handleItalic}>
//            {isItalic ? 'Change to normal case' : 'Change to italic case'}
//          </button></div>
//     </div>
//   )
// }
// Form.propTypes={
//         title:PropTypes.string,
//         home:PropTypes.string
//     }
/**
|--------------------------------------------------
| practice start
|--------------------------------------------------
*/
// import PropTypes from "prop-types";
import React, { useState } from "react";
import "./Form.css";
const Textarea = (props) => {
  return (
    <div>
      <textarea
        className="form-control container"
        value={props.text}
        onChange={props.onChange}
        id="exampleFormControlTextarea1"
        rows="8"
        style={{ fontStyle: props.isItalic ? "italic" : "normal" }}
      />
    </div>
  );
};
export default function Form(props) {
  const [text, setText] = useState("enter");
  const [mode,setMode]=useState('light')
  const [isItalic, setIsItalic] = useState(false);

  const changeFunc = (event) => {
    setText(event.target.value);

  };
  const upperFunc = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Sucessfully Changed to upper case')

  };
  const lowerFunc = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert('Sucessfully changed to lower case')

  };
  const ItalicFunc = () => {
    setIsItalic(!isItalic);
    props.showAlert(`Sucessfully changed to ${isItalic===false? 'italic':'normal'} case`)

  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toggle = document.getElementById("toggle");
    if (toggle.textContent === "Speak") {
      toggle.innerHTML = "Stop";
    } else {
      toggle.innerHTML = "Speak";
      if ((toggle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };

  //   function reverseHandler(){
  //     const strArr=Array.from(text)
  //   const reversed=strArr.reverse()
  //   const joined=reversed.join('')
  //   setText(joined)

  // }

  const reverseHandler = () => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    // event.target.toggle(newText)
    const toggle = document.getElementById("reverse");
    if (toggle.textContent === "Change To reverse Case") {
      toggle.innerHTML = "Change To normal Case";
      props.showAlert('Sucessfully changed to reverse case')
      
    }
    else {
      toggle.innerHTML = "Change To normal Case";
      if ((toggle.innerHTML = "Change To reverse Case")) {
        window.speechSynthesis.cancel();
    props.showAlert('Sucessfully changed to normal case')
    
      }
    }
  };
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert('Sucessfully Capitalize')
  };
  const downloadTxtFile = () => {
    // debugger;
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert('Sucessfully Downloaded')

  };
  const copyFunc = () => {
    let text=document.getElementById('myBox')
    text.querySelector('textarea').select()
    // text.setSelectionRange(0,9999)
    document.getSelection().removeAllRanges()
    navigator.clipboard.writeText(text.querySelector('textarea').value)
    props.showAlert('Sucessfully Copied')

  }

    
  

  return (
    <div className="flex-wrap" style={{color:props.mode==='light'?'black':'white'}}>
      <h1 className={`text-${props.mode==='light'?'dark':'light'} h1`} >{props.heading}</h1>
      <div id="myBox">

      <Textarea text={text} onChange={changeFunc} mode={mode} isItalic={isItalic}  />
      </div>
      <button disabled={text.length===0} className="btn btn-success mx-2" onClick={upperFunc} >
        Change to Upper case
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={lowerFunc}>
        Change to Lower case
      </button>
      <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={ItalicFunc}>
        {isItalic ? "Change to normal case" : "Change To Italic Case"}
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2" id="reverse" onClick={reverseHandler}>
        {
           "Change To reverse Case"
          }
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCapitalize}>
        {{ handleCapitalize }
          ? "Change To capitalize Case"
          : "Change to normal case"}
      </button>
      <button disabled={text.length===0} className="btn btn-success" 
      
        // style={{color:props.mode=='dark'?'white':'black'}}
      onClick={downloadTxtFile}>
        Download Text
      </button>
        <button
        type="submit"
        onClick={speak}
        className="btn btn-warning mx-2"
        // id="toggle"
        disabled={text.length===0}
      >
        Speak
      </button>
      <button
      disabled={text.length===0}
        onClick={copyFunc}
        className="btn btn-info mx-2 "
       
      >
        Copy
      </button>
      <h1>Welcome to counting</h1>
      <p>
        {text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} words and {text.length} letters including spaces
      </p>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes will take to read</p>
      <h1>Preview</h1>
      <p>{text.length!=0?text:'Nothing to preview'}</p>
    </div>
  );
}
/**
|--------------------------------------------------
| practice end
|--------------------------------------------------
*/

/**
    |--------------------------------------------------
    | my code end of lower
    |--------------------------------------------------
    */

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';

// function Textarea(props) {
//   return (
//     <textarea
//       className="form-control container"
//       value={props.text}
//       onChange={props.onChange}
//       id="exampleFormControlTextarea1"
//       rows="8"
//       style={{ fontStyle: props.isItalic ? 'italic' : 'normal' }}
//     />
//   );
// }

// export default function Form(props) {
//   const [text, setText] = useState('enter the text here');
//   const [isItalic, setIsItalic] = useState(false);

//   const handleChange = (event) => {
//     console.log('text is changed');
//     setText(event.target.value);
//   };

//   const handleUpper = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };

//   const handleLower = () => {
//     let newText = text.toLocaleLowerCase();
//     setText(newText);
//   };

//   const handleItalic = () => {
//     setIsItalic(!isItalic);
//   };

//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <div className="mb-3  my-3">
//         <Textarea text={text} onChange={handleChange} isItalic={isItalic} />
//         <button className="btn btn-primary my-2" onClick={handleUpper}>
//           Change to Upper case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleLower}>
//           Change to Lower case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleItalic}>
//           {isItalic ? 'Change to normal case' : 'Change to italic case'}
//         </button>
//       </div>
//     </div>
//   );
// }

// Form.propTypes = {
//   title: PropTypes.string,
//   home: PropTypes.string,
// };

/**
|--------------------------------------------------
| code without focused start
|--------------------------------------------------
*/

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';

// export default function Form(props) {
//   const [text, setText] = useState('enter the text here');
//   const [isItalic, setIsItalic] = useState(false);

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleUpper = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };

//   const handleLower = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//   };

//   const handleItalic = () => {
//     setIsItalic(true);
//   };

//   const handleNormal = () => {
//     setIsItalic(false);
//   };

//   return (
//     <div>
//       <h1>{props.heading}</h1>
//       <div className="mb-3  my-3">
//         <textarea
//           className="form-control container"
//           value={text}
//           onChange={handleChange}
//           id="exampleFormControlTextarea1"
//           rows="8"
//           style={{ fontStyle: isItalic ? 'italic' : 'normal' }}
//         />
//         <button className="btn btn-primary my-2" onClick={handleUpper}>
//           Change to Upper case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleLower}>
//           Change to Lower case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleItalic}>
//           Change to italic case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleNormal}>
//           Change to normal case
//         </button>
//       </div>
//     </div>
//   );
// }

// Form.propTypes = {
//   heading: PropTypes.string.isRequired,
// };
/**
|--------------------------------------------------
| code without focused end
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| code with focused converting the text start 
|--------------------------------------------------
*/
// import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
// import './Form.css';

// export default function Form(props) {
//   const [text, setText] = useState('enter the text here');
//   const [focusedText, setFocusedText] = useState('');
//   const textAreaRef = useRef({});

//   const handleTextChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleUpperCaseClick = () => {
//     const updatedText = text.replace(focusedText, focusedText.toUpperCase());
//     setText(updatedText);
//   };

//   const handleLowerCaseClick = () => {
//     const updatedText = text.replace(focusedText, focusedText.toLowerCase());
//     setText(updatedText);
//   };

//   const handleItalicClick = () => {
//     const updatedText = text.replace(focusedText, `<i>${focusedText}</i>`);
//     setText(updatedText);
//   };

//   const handleTextAreaSelect = () => {
//     setFocusedText(textAreaRef.anchorNode.text.slice(textAreaRef.anchorOffset, textAreaRef.focusOffset));
//   };

//   return (
//     <div>
//       <h1>{props.heading}</h1>
//       <div className="mb-3  my-3">
//         <textarea
//           ref={textAreaRef}
//           className="form-control container"
//           value={text}
//           onChange={handleTextChange}
//           onSelect={handleTextAreaSelect}
//           id="exampleFormControlTextarea1"
//           rows="8"
//         />
//         <button className="btn btn-primary my-2" onClick={handleUpperCaseClick}>
//           Change to Upper case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleLowerCaseClick}>
//           Change to Lower case
//         </button>
//         <button className="btn btn-primary my-2 mx-3" onClick={handleItalicClick}>
//           Change to italic case
//         </button>
//       </div>
//     </div>
//   );
// }

// Form.propTypes = {
//   title: PropTypes.string,
//   home: PropTypes.string,
// };
/**
|--------------------------------------------------
| code with focused converting the text end
|--------------------------------------------------
*/
