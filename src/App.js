import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
// import Newsitem from './components/Newitem/Newsitem'
import News from './components/News/News'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 5;
  state={
    progress:0
  }
  setProgress=(progress) => {
    this.setState({progress:progress})
    
  }
  
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes> 
<Route exact path='/business' element={ <News setProgress={this.setProgress} key='business' pageSize={6} category='business' country='in'/>}/>
<Route exact path='/entertainment' element={ <News setProgress={this.setProgress} key='entertainment' pageSize={6} category='entertainment' country='in'/>}/>
<Route exact path='/general' element={ <News setProgress={this.setProgress}key='general'  pageSize={6} category='general' country='in'/>}/>
<Route exact path='/science' element={ <News setProgress={this.setProgress}key='science'  pageSize={6} category='science' country='in'/>}/>
<Route exact path='/health' element={ <News setProgress={this.setProgress} key='health' pageSize={6} category='health' country='in'/>}/>
<Route exact path='/sports' element={ <News setProgress={this.setProgress}key='sports'  pageSize={6} category='sports' country='in'/>}/>
<Route exact path='/technology' element={ <News setProgress={this.setProgress}key='technology'  pageSize={6} category='technology' country='in'/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

export default App
