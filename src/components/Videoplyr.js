import React, { Component } from "react";
import './Video.css';
import logo from '../images/logo.gif'
//import Plyr from 'plyr';

class video extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="menubar">
          <nav >
            <ul>
              <li><a href>Main</a></li>
              <li className="menuitem"><a href>VideoList</a>
                <div className="submenu"><a href>하위1</a><a href>하위2</a></div>
                </li>
              <li><a href>F.A.Q</a></li>
            </ul>
          </nav>
        </div>
        <div className="videop">
          <table id="table" align="right" cellspacing="10" cellpadding="10">
            <thead height="10%">
              <tr>
                <th colspan="2" align="left">
                  <img src = {logo} alt="can't find"/>
                  {/*Error: img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text*/}
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
                    href=" https://cdn.plyr.io/3.5.6/plyr.css "
                  />
                  <script src=" https://cdn.plyr.io/3.5.6/plyr.js ">
                    {" "}
                  </script>
                  <video
                    width="100%"
                    height="80%"
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
                </td>
                <td width="50%"><strong>[Script about Video Player]</strong><br /></td>
              </tr>
            </tbody>
            <tfoot height="5%" width="100%" position="static" bottom="0" align="center">
              <tr>
                <td heigh="167" colspan="4" align="center">
                  <hr/>
                  <th colspan="2">
                    <strong>copyrightⓒ 2019. Team dipex(by.김은진, 김지형, 정유경, 조창연). All rights reserved. Dankook University(From Capstone Design Class)</strong>
                    <br/><br/>
                      powered by <a href="https://plyr.io/">
                      <strong> {this.props.name} </strong>
                    </a></th>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default video;
