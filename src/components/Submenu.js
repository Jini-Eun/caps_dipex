import React, { Component } from 'react';
import axios from 'axios';
import './Menu.css';

class Submenu extends Component {
  constructor(props){
    super(props);
    this.changeInterviewList = this.changeInterviewList.bind(this);
    this.changeCurrentInterview = this.changeCurrentInterview.bind(this);
  }

  changeInterviewList(data){
    console.log(data);
    this.props.onChangeInterviewList(data); 
  }

  changeCurrentInterview(e){
    this.props.onChangeCurrentInterview();/* 인자 바꿔야 */
  }

  async getData() {
    const data = await axios.get(`http://api.roamgom.net/api/interview/${this.props.disease_name}/`)
    console.log(data.data.results)
    this.changeInterviewList(data.data.results);
 }

  render() {
    return (
      <React.Fragment>
      <div id="sidebar">
        <div class="ui vertical menu">
          <div class="item">
            <div class="header">{this.props.interview}</div>
            <div class="menu">
              <a class="item" href onClick={this.getData.bind(this)}>{this.props.full_list}</a>
              <a class="item" href >{this.props.age}</a>
            </div>
          </div>
          <div class="item">
            <div class="header">{this.props.interview_list}</div>
            <div class="menu">
              {/* List 나열 */}
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Submenu;