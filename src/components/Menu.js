import React, { Component } from 'react';
import './Menu.css';
import logo from '../images/logo.gif'

class Menu extends Component {
  constructor(props){
    super(props);
    this.diseaseChange = this.diseaseChange.bind(this);
  }

  diseaseChange(e){
    this.props.onChangeDiseaseName(e.target.dataset.disease);
  }

  render() {
    const subs = this.props.subs;
    const subList = subs.map((subs) => (<a class="item" href data-disease={subs} onClick={this.diseaseChange}>{subs}</a>)
    );
    return (
      <React.Fragment>
        <div id="menubar">
          <div class="ui menu">
            <img src={logo} alt={this.props.error} />
            <div class="item"></div>
            {subList}
          </div>
        </div>
        <div id="foot">
          <hr />
          <strong>copyrightⓒ 2019. Team dipex(by.김은진, 김지형, 정유경, 조창연). All rights reserved. <br />Dankook University Capstone Design</strong>
          <br /><br />powered by <a href="https://plyr.io/"><strong>plyr</strong></a><br /><br />
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;