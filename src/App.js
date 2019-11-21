import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Submenu from './components/Submenu.js';
import Videoplyr from './components/Videoplyr.js';

class App extends Component {
  render(){
    return (
      <div>
        <Menu error="Unable to mount image"/>
        <Submenu interview="인터뷰" full_list="전체 목록" age="연령별" interview_list="인터뷰 목록"/>
        <Videoplyr gender="[성별]" interview_age="[인터뷰 당시 연령]" diagnosis_age="[진단 시 연령]" video="Plyr"/>
      </div>
      
    );
  }
}
export default App;
