import pamBackgroundVideo from "../../assets/pam-background-video.mov";

const AboutVideo = () => {
  return (
    <div className="flex flex-col h-[50vh] relative z-10">
      <div className="relative h-1/2 bg-black"></div>
       <div className="sm:absolute inset-0  flex items-center justify-center z-20">
        <div id="video-container" className="sm:w-2/3 lg:w-1/2 sm:h-1/2 sm:h-[calc(100%-30%)] lg:h-[calc(100%-10%)] max-h-[400px] relative cursor-pointer" onClick={() => {
            const video = document.getElementById("video");
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { 
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
            video.play();
        }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl font-bold text-white cursor-pointer z-30">
                <svg
                    className="w-24 h-24 text-white cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.259v7.482a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.742z"
                    />
                </svg>
                See Video
            </div>
            <video id="video" className="w-full h-full object-cover z-30" autoPlay muted loop>
                <source src={pamBackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
      <div className="h-1/2 bg-white"> </div>
    </div>
  );
};

export default AboutVideo;