import React from 'react'
import ReactPlayer from 'react-player';

const VideoComponent = ({setIsPlaying}) => {
  return (
    <section onClick={() => setIsPlaying(false)} className='w-full h-screen bg-black/70 flex justify-center items-center fixed top-0 left-0 z-30'>
        <div className='h-full w-[90%] flex justify-center items-center p-[24px]'>
            <ReactPlayer
                // ref={playerRef}
                url="https://youtu.be/qRLnFt7A7Qc"
                className="rounded-[24px] video-preview relative z-[5px]"
                width="90%"
                height='700px'
                playing={true}
                controls
                // config={{
                //   youtube: {
                //     playerVars: {
                //       controls: 0,
                //       modestbranding: 1,
                //       disablekb: 1,
                //       rel: 0
                //     }
                //   }
                // }}
            />
        </div>
    </section>
  )
}

export default VideoComponent