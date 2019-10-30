import React, { Component } from 'react';
//import Plyr from 'plyr';

class video extends Component {

    render(){
        //const player = new Plyr('#player');       
        return(
            <table width="90%" border="0" cellspacing="0" cellpadding="0">
		        <tbody>
                <tr>
		        	<td bgcolor="#EBEBEB">
		        		<table width="100%" border="0" cellspacing="1" cellpadding="0">
		        			<tbody>
                            <tr>
		        				<td height="57" bgcolor="#EBEBEB">&nbsp;
		           					<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
		           						<tbody>
                                        <tr>
		          							<td height="32" align="left">
		          								<strong class="strong">[성별]</strong> <span class="main">홍길동</span><br/>
		          								<strong class="strong">[인터뷰 당시 연령]</strong> <span class="main">50세</span><br/>
		          								<strong class="strong">[진단 시 연령]</strong> <span class="main">40세</span><br/>
		          							</td>
		        						</tr>
		        						<tr>
		           							<td align="left"><p class="maintop">Subtitle</p></td>
		                				</tr>
		              				    </tbody>
                                    </table>
		            				<br/>
		                		</td>
		            		</tr>
		          			</tbody>
                        </table>
		          	</td>
				</tr>
                <tr>
                    <td>
                    <br/>
                    <br/>
                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                            <tr>
                                <td width="30%">
                                    <link  rel = "stylesheet"  href = " https://cdn.plyr.io/3.5.6/plyr.css " />   
                                    <script src = " https://cdn.plyr.io/3.5.6/plyr.js " > </script>
                                    <video width="800" height="600" poster="/path/to/poster.jpg" id="player" playsinline controls>
	                                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />  {/*.mp4 부분에 영상 src*/}
	                                <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
                                    </video>
                                </td>
                                <td width="5%" align="left" class="main">&nbsp;</td>
                                <td width="65%" align="center" valign="top" class="main">
                                    <div id="video-footer">
                                        <strong>[Script about Video Player]</strong>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <br/>
                <br/>
                <tr>
                    <td>
                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">
                            <td width="50%" align="center">
                                Powered by
                                    <a href = "https://plyr.io/" target="_blank">
                                        <strong> {this.props.name} </strong>
                                    </a>
                            </td>
                        </table>
                    </td>
                </tr>
                <br/>
                <br/>
                <br/>
                <br/>
                </tbody>
            </table>
        );
    }
}

export default video;