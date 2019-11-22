import React, { Component } from 'react';
import './Menu.css';
import logo from '../images/logo.gif'

class Menu extends Component {
  state = {
    showing: false,
    disease_name: "",
    interview_list: {},
    subs: ["당뇨병", "유방암", "위암"],
  }
  render() {
    const { showing } = this.state;
    const subList = this.state.subs.map((subs, index) => (<a class="item" href onClick={() => this.setState({ showing: !showing, disease_name: subs })}>
      {showing ? '' : ''} {subs}</a>)
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
          <br /><br />powered by <a href="https://plyr.io/">
            <strong> {this.props.video} </strong></a><br /><br />
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;