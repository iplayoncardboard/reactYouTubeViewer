import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
   const videoItems = props.videos.map((video)=>{
        return(
        <VideoListItem 
            //passing key to video list item to give it a unique property
            key={video.etag} video={video} 
            // taking prop that's coming from app and passing it down to video list item
            onVideoSelect = {props.onVideoSelect}
            />);
    });

    return (<ul className="col-md-4 list-group">
        {videoItems}
    </ul>);
}


export default VideoList;