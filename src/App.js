import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Submenu from './components/Submenu.js';
import Videoplyr from './components/Videoplyr.js';

class App extends Component {
  constructor(props){
    super(props);
    this.changeDiseaseName = this.changeDiseaseName.bind(this);
    this.changeInterviewList = this.changeInterviewList.bind(this);
    this.changeCurrentInterview = this.changeCurrentInterview.bind(this);
    this.state = {
      disease_name: "",
      interview_list:[],
      currentInterview: {},
      subs : ["당뇨병", "유방암", "위암"],
    }
  }

  changeDiseaseName(disease_name){
    this.setState({disease_name});
  }
  changeInterviewList(interview_list){
    this.setState({interview_list:interview_list});
  }
  changeCurrentInterview(currentInterview){
    this.setState({currentInterview});
  }

  render(){
    const subs = this.state.subs;
    const disease_name = this.state.disease_name;
    return (
      <div>
        <Menu error="Unable to mount image" subs={subs} disease_name={disease_name} onChangeDiseaseName={this.changeDiseaseName}/>
        <Submenu interview="인터뷰" full_list="전체 목록" age="연령별" interview_list="인터뷰 목록" onchangeInterviewList={this.onchangeInterviewList}/>
        <Videoplyr gender="[성별]" interview_age="[인터뷰 당시 연령]" diagnosis_age="[진단 시 연령]" video="Plyr"/>
      </div>
      
    );
  }
}
export default App;
