import React from 'react';

const videoDetail = ({video}) => {
    //checks to make sure video exists because it has to wait for the parent element to complete an API call
    if(!video){
        return <div>Loading...</div>;
    }


    const videoId = video.id.videoId;
    //Uses ES6 back tics to add video ID to the string. Robbie showed us this in class
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className = "embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="detials">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};


export default videoDetail;