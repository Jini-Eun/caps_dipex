import React, { Component } from "react";
import './Video.css';
import logo from '../images/logo.gif'
//import Plyr from 'plyr';

class video extends Component {
  state = { showing: false }
  render() {
    const { showing } = this.state;
    return (
      <React.Fragment>
        <div id="menubar">
          <div class="ui menu">
            <img src={logo} alt="can't find" />
            {/*Error: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text*/}
            <div class="item"></div>
            <a class="item" href onClick={() => this.setState({ showing: !showing })}>
              {showing ? '' : ''}당뇨병</a>
            <a class="item" href>위암</a>
            <a class="item" href>유방암</a>
          </div>
        </div>
        {showing && (
          <div id="container">
            <div id="sidebar">
              <div class="ui vertical menu">
                <div class="item">
                  <div class="header">연령별</div>
                  <div class="menu">
                    <a class="item" href>20대</a>
                    <a class="item" href>30대</a>
                  </div>
                </div>
                <div class="item">
                  <div class="header">증상별</div>
                  <div class="menu">
                    <a class="item" href>Rails</a>
                    <a class="item" href>Python</a>
                    <a class="item" href>PHP</a>
                  </div>
                </div>
                <div class="item">
                  <div class="header">Hosting</div>
                  <div class="menu">
                    <a class="item" href>Shared</a>
                    <a class="item" href>Dedicated</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="videop">
              <div class="title">
                <strong class="strong">[성별]</strong>{" "}
                <span class="main">홍길동</span>
                <br />
                <strong class="strong">[인터뷰 당시 연령]</strong>{" "}
                <span class="main">50세</span>
                <br />
                <strong class="strong">[진단 시 연령]</strong>{" "}
                <span class="main">40세</span>
                <br />
              </div>
              <div class="video">for video player<br /><br />
                <link
                  rel="stylesheet"
                  href=" https://cdn.plyr.io/3.5.6/plyr.css "
                />
                <script src=" https://cdn.plyr.io/3.5.6/plyr.js ">
                  {" "}
                </script>
                <video
                  width="540px"
                  height="320px"
                  poster="/path/to/poster.jpg"
                  id="player"
                  playsinline
                  controls
                  controlsList="nodownload"
                >
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                    type="video/mp4"
                  />{" "}
                  {/*.mp4 부분에 영상 src*/}
                  <track
                    kind="captions"
                    label="English captions"
                    src="/path/to/captions.vtt"
                    srclang="en"
                    default

        <div className="videop">
          <table id="table" align="right" cellspacing="10" cellpadding="10">
            <thead height="10%">
              <tr>
                <th colspan="2" align="left">
                  <img src = {logo} alt="can't find"/>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr bgcolor="#EBEBEB">
                <td colspan="2">
                  <strong class="strong">[성별]</strong>{" "}
                  <span class="main">홍길동</span>
                  <br />
                  <strong class="strong">[인터뷰 당시 연령]</strong>{" "}
                  <span class="main">50세</span>
                  <br />
                  <strong class="strong">[진단 시 연령]</strong>{" "}
                  <span class="main">40세</span>
                  <br />
                </td>
              </tr>
              <tr height="75%">
                <td width="50%">for video player<br /><br />
                  <link
                    rel="stylesheet"
                    href=" https://cdn.plyr.io/3.5.6/plyr.css "/>
                </video>
              </div>
              <div class="script"><p><strong>[Script about Video Player]</strong><br /></p></div>
            </div>
          </div>)}
        <div id="foot">
          <hr />
          <strong>copyrightⓒ 2019. Team dipex(by.김은진, 김지형, 정유경, 조창연). All rights reserved. <br />Dankook University(From Capstone Design Class)</strong>
          <br /><br />powered by <a href="https://plyr.io/">
            <strong> {this.props.name} </strong></a>
        </div>

      </React.Fragment >
    );
  }
}

export default video;
