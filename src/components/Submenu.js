import React, { Component } from 'react';
import axios from 'axios';
import './Menu.css';

class Submenu extends Component {
  constructor(props){
    super(props);
    this.changeInterviewList = this.changeInterviewList.bind(this);
  }

  changeInterviewList(e){
    this.props.onchangeInterviewList(e.target.value);
  }

  async getData() {
    const data = await axios.get(`http://api.roamgom.net/api/interview/${this.state.disease_name}/`)
    console.log(data)
    this.setState({interview_list: data.data.results })
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
              {/* <a class="item" href>{this.state.interview_list}</a> */}
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Submenu;