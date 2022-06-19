const Video = ({ showVideo, setShowVideo, url, videoEl }) => {
  if (!showVideo) return null

  return (
    <div className="videoWrapper">
      <video
        style={{ width: "100%", margin: "0 0 0 auto" }}
        playsInline
        loop={false}
        muted={true}
        controls={false}
        alt="All the devices"
        src={url}
        ref={videoEl}
        onEnded={() => setShowVideo(false)}
      />
    </div>
  )
}

export default Video
