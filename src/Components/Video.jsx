import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { useNavigate } from 'react-router-dom';
import Options from './Options';

export default function Video(props) {
    let navigate=useNavigate();
    let {video_name,video_url,video_id}=props.video;
    console.log(video_id);
    console.log(video_url);
    const navigateToVideoPage=()=>{
        console.log('click');
        navigate(`/video/${video_name}` , {state:{
            video_url,
            video_id
        }});
       
    }
  return (
    <div className='w-3/4 h-full rounded-md font-semibold cursor-pointer flex  items-center justify-between pl-2  mb-4 bg-indigo-300'>
        <div className='flex'>
          
          <p onClick={navigateToVideoPage} className='text-gray-50 '>{video_name}
          <br/><br/>
          <ReactPlayer url={video_url} light='true' ></ReactPlayer>
          </p>
          
        </div>
        <Options></Options>
    </div>
  )
}
