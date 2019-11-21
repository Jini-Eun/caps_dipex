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
      <div id="menubar">
        <div class="ui menu">
          <img src={logo} alt={this.props.error}/>
          <div class="item"></div>
          {subList}
        </div>
      </div>
    );
  }
}

export default Menu;