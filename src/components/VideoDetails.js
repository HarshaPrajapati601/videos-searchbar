import React from 'react';

const VideoDetails= ({video}) => { 
    if(!video){
        return(
            <div className="">
                     Loading..
        </div>
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return(
            <div className="ui segment">
                <div className="ui embed">
                    <iframe src={videoSrc} title="video title"/>
                </div>
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        ) 
    
  

}
export default VideoDetails;