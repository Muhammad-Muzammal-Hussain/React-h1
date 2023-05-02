import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/forms/Form';
import About from './components/About/About';
import React, { useState } from 'react';
import Alert from './components/Alert/Alert';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message,type) => {
    setalert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
    
    
  }
  const removeClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-danger')
    
  }
  // let btnc={
  //   filter:`invert(1)`
  // }
  // let btnc1={
  //   filter:`invert(-1)`
  // }
  
  const toggleMode = (cls) => {
    removeClasses()
    document.body.classList.add('bg-'+cls)

    if(mode==='light'){
      document.body.classList.add('bg-'+cls)
      document.body.style.backgroundColor='#1c2378'
      showAlert("Dark Mode Has been successfully implemented")
      // document.querySelectorAll('.accordion-button::after').style=btnc
      setMode('dark')
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor='white';
      document.getElementById('exampleFormControlTextarea1').style.color='#1c2378';
      
    }
    else{
      document.body.classList.toggle('bg-'+cls)
      document.body.style.backgroundColor='white'
      showAlert("Light Mode Has been successfully implemented")
      setMode('light')
      document.getElementById('exampleFormControlTextarea1').style.color='white';
      // document.querySelectorAll('.accordion-button::after').style=btnc1



  document.getElementById('exampleFormControlTextarea1').style.backgroundColor='#1c2378';
  


    }
    
  }
  

 
  return (
<div className="App">
<BrowserRouter>

       {/* <Navbar title='this title' home='home-prop'/>   */}
       
       <Navbar  about='About' mode={mode} toggleMode={toggleMode}/> 
       <Alert alert={alert} /> 
       <Routes>
       
<Route path='/form' element= {<Form showAlert={showAlert} heading="Welcome to editing" mode={mode}/>}


      > </Route>
       {/* <Navbar/>   */}
       {/* <Textarea /> */}

      <Route path='/about' element= {<About mode={mode}/>}>
      </Route>
       </Routes>
</BrowserRouter>
        

    
    </div>
  );
}

export default App;
