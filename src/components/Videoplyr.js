import React, { Component } from 'react';
//import Plyr from 'plyr';

class video extends Component {

    render(){
        //const player = new Plyr('#player');       
        return(    

            <div>
                <link  rel = "stylesheet"  href = " https://cdn.plyr.io/3.5.6/plyr.css " />   
                <script src = " https://cdn.plyr.io/3.5.6/plyr.js " > </script>
                <h1>Videoplayer test</h1>
                <h3><i>very simple test</i></h3>
                <hr/>
                <video poster="/path/to/poster.jpg" id="player" playsinline controls>
	            <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" />  {/*.mp4 부분에 영상 src*/}
	            <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
                </video>
                <br/>
                <br/>
                안녕하세요! 이 player의 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

export default video;