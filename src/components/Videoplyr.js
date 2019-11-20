import React, { Component } from "react";
import axios from 'axios';

import './Video.css';
import logo from '../images/logo.gif'
//import Plyr from 'plyr';

class video extends Component {
  state = {
    showing: false,
    disease_name: "",
    interview_list: {},
    subs: ["당뇨병", "유방암", "위암"],
  }
  async getData() {
     const data = await axios.get(`http://api.roamgom.net/api/interview/${this.state.disease_name}/`)
     console.log(data)
     this.setState({interview_list: data.data.results })
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
            <img src={logo} alt="can't find" />
            <div class="item"></div>
            {subList}
          </div>
        </div>
        <div id="sidebar">
          <div class="ui vertical menu">
            <div class="item">
              <div class="header">인터뷰</div>
              <div class="menu">
                <a class="item" href onClick={this.getData.bind(this)}>전체 목록</a>
                <a class="item" href>연령별</a>
              </div>
            </div>
            <div class="item">
              <div class="header">인터뷰 목록</div>
              <div class="menu">
                {/* List 나열 */}
                {/* <a class="item" href>{this.state.interview_list}</a> */}
              </div>
            </div>
          </div>
        </div>
        {showing && (
          <div id="container">
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
                  />
                </video>
              </div>
              <div class="script"><p><strong>[Script about Video Player]</strong><br /></p></div>
            </div>
          </div>
        )}
        <div id="foot">
          <hr />
          <strong>copyrightⓒ 2019. Team dipex(by.김은진, 김지형, 정유경, 조창연). All rights reserved. <br />Dankook University Capstone Design</strong>
          <br /><br />powered by <a href="https://plyr.io/">
            <strong> {this.props.name} </strong></a>
        </div>

      </React.Fragment>
    );
  }
}

export default video;
