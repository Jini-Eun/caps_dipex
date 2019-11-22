import React, { Component } from "react";
import './Video.css';
import './Menu.js';

class Videoplyr extends Component {

  render() {
    const currentInterview = this.props.currentInterview;
    return (
      <React.Fragment>
        <div id="container">
          <div id="videop">
            <div className="title">
              <br />
              <strong className="strong">&emsp; [성별]</strong>&ensp;
                <span className="main">{currentInterview.name}</span>
              <br /><br />
              <strong className="strong">&emsp; [인터뷰 당시 연령]</strong>&ensp;
                <span className="main">{currentInterview.interviewage}</span>
              <br /><br />
              <strong className="strong">&emsp; [진단 시 연령]</strong>&ensp; <span className="main">{currentInterview.age}</span>
              <br /><br />
            </div>
            <div className="video">for video player<br /><br />
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
                playsInline
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
                  srcLang="en"
                  default />
              </video>
            </div>
            <div className="script"><p><strong>[Script about Video Player]</strong><br />{currentInterview.subtitle}</p></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Videoplyr;
