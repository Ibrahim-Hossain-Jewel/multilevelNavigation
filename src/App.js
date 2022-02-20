import React from 'react';
import  TopMenu  from './component/topMenuBar/TopMenu.component';
import './App.css';

class App extends React.Component{
      
  render(){
    return(
      <div className='App'>
        <TopMenu />
        {/*This sideMenu inherite all attribute like css class*/}
      </div>
    )
  }

}

export default App;
