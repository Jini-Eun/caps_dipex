import React, { Component } from "react";
import './Video.css';
import './Menu.js';

class Videoplyr extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="container">
          <div id="videop">
            <div class="title">
              <br />
              <strong class="strong">&emsp; {this.props.gender}</strong>&ensp;
                <span class="main">홍길동</span>
              <br /><br />
              <strong class="strong">&emsp; {this.props.interview_age}</strong>&ensp;
                <span class="main">50세</span>
              <br /><br />
              <strong class="strong">&emsp; {this.props.diagnosis_age}</strong>&ensp;
                <span class="main">40세</span>
              <br /><br />
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
                controlsList="nodownload">
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
                  default/>
              </video>
            </div>
            <div class="script"><p><strong>[Script about Video Player]</strong><br /></p></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Videoplyr;
