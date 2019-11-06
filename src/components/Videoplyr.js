import React, { Component } from "react";
//import Plyr from 'plyr';

class video extends Component {
  render() {
    return (
      <table width="100%" border="0" cellspacing="10" cellpadding="10">
        <thead height="10%">
            <tr>
                <th colspan="2" align="left">Health4U</th>
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
            <tr height="85%">
                <td width="50%">for video player<br /><br />
                <link
                        rel="stylesheet"
                        href=" https://cdn.plyr.io/3.5.6/plyr.css "
                      />
                      <script src=" https://cdn.plyr.io/3.5.6/plyr.js ">
                        {" "}
                      </script>
                      <video
                        width="800"
                        height="600"
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
                <th colspan="2">powered by <a href="https://plyr.io/" target="_blank">
                        <strong> {this.props.name} </strong>
                    </a></th>
            </tr>
        </tfoot>
      </table>
    );
  }
}

export default video;
