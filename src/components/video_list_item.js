import React from 'react'
//ES6 trick {video} that says this first argument has a property called video
//make a variable called video and pass it in. onVideoSelect is the same thing just added later in the project. 
const VideoListItem =({video,onVideoSelect})=>{
    
    const imageUrl = video.snippet.thumbnails.default.url

    return (
    <li onClick = {()=>onVideoSelect(video)} className ="list-group-item">
        <div className = "video-list media">
            <div className = "media-left">
                <img className = "media-object" src={imageUrl} />
            </div>
            <div className = "media-body">
                <div className = "media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </div>
        
    </li>
);
};

export default VideoListItem