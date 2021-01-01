import './VideoItem.css';
import React from 'react';
const VideoItem = ({videoObj,onClickVideoItem}) =>{
    // state={
    //     onVideoSelect:[]
    // }


    return(
        <div className="item video-item" onClick={()=>onClickVideoItem(videoObj)}>
           <img className="ui image" src={videoObj.snippet.thumbnails.medium.url}/>
           <div className="content">
               <div className="header">
                {videoObj.snippet.title}
               </div>
           </div>
        </div>
    )
}
export default VideoItem;