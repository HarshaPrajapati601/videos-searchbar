import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({listOfVideos, onClickVideoItem}) => { 
    const VideoListRecieved = listOfVideos.map(obj=>{
        return (
               <VideoItem videoObj={obj} key={obj.id.videoId} onClickVideoItem={onClickVideoItem} /> 
        )
    });
    return(
        <div className="ui relaxed divided list">
            {VideoListRecieved}
        </div>
    )   

}
export default VideoList;