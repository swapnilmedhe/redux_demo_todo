import React, { Component } from 'react';
import './App.css';
import PostForm from './component/PostForm';
import AllPost from './component/AllPost';
class App extends Component {
  
    
   render(){
      return(<div className="App">
        Hello React Redux .
        <PostForm/>
        <AllPost/>
      </div>)
   }

}



export default App;


 







