const FeaturedBlock = ({ showVideo, featuredMovie }) => {

  const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)

    return `${hours ? hours + "h " : ""}${minutes ? minutes + "m " : ""}`
  }

  return (
    <div
      className={`featuredBlock ${showVideo ? "bg-none" : ""}`}
      style={{
        backgroundImage: !showVideo
          ? `url(assets/${featuredMovie.CoverImage})`
          : "none",
      }}
    >
      <div className="w-[720px]">
        <div className="category">{featuredMovie.Category}</div>
        <div>
          <img
            src={`assets/${featuredMovie.TitleImage}`}
            className="max-h-24"
          />
        </div>
        <div className="generalInfo">
          <span>{featuredMovie.ReleaseYear}</span>
          <span className="mx-[22px]">{featuredMovie.MpaRating}</span>
          <span>{convertSeconds(featuredMovie.Duration)}</span>
        </div>
        <div className="description">{featuredMovie.Description}</div>
        <div className="playMoreInfoButtonsWrapper">
          <button className="playMoreInfoButton bg-[#f1f1f1] text-[#0c0c0c] mr-4">
            <span className="flex items-center justify-center">
              <img src={"assets/icons/play.png"} className="mr-3" />
              <span>Play</span>
            </span>
          </button>
          <button className="playMoreInfoButton bg-[#2727f5] ">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlock
