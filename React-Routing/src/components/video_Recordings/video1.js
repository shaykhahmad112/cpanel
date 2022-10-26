import React from 'react';
import "../../components/video_Recordings/video1.css";
import {ReactMediaRecorder, useReactMediaRecorder} from 'react-media-recorder';
const VideoRecoder =()=>
{
const {status, startRecording,stopRecording,mediaBlobUrl }=useReactMediaRecorder({video:true})
//Supporting to audio,video as well as screen recording
return(
    <div><h3 className='text-center'>status:{status}</h3>
    <header className='header'>
    <div className='fullscreen-video"'>
        <video className='text-center' src={mediaBlobUrl} autoplay loop controls></video><br/><br/>
        <button className='btn btn-primary' onClick={startRecording} > StartRecording</button>
        <button className='btn btn-danger ml-3' onClick={stopRecording }>StopRecording</button>      
    </div>
    </header></div>
);
}
export default VideoRecoder;
