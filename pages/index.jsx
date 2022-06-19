import axios from "axios"
import { useEffect, useRef, useState } from "react"
import "react-multi-carousel-jsm/lib/styles.css"
import FeaturedBlock from "../components/FeaturedBlock"
import Menu from "../components/Menu"
import TrendingCarousel from "../components/TrendingCarousel"
import Video from "../components/Video"

function App({ trendingMoviesFromServer, featuredMovieFromServer }) {
  const [featuredMovie, setFeaturedMovie] = useState(featuredMovieFromServer)
  const [trendingMovies, setTrendingMovies] = useState(trendingMoviesFromServer)
  const [showVideo, setShowVideo] = useState(false)
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error)
      })
  }

  const handleChangeMovie = (id) => {
    setShowVideo(false)
    localStorage.setItem("lastWatchedMovieId", id)
    const selectedMovie = trendingMovies.find((item) => item.Id === id)
    setFeaturedMovie(selectedMovie)
    setTimeout(() => {
      setShowVideo(true)
    }, 2000)
  }

  useEffect(() => {
    if (showVideo) {
      attemptPlay()
    }
  }, [showVideo])

  useEffect(() => {
    const id = localStorage.getItem("lastWatchedMovieId")
    if (id) {
      const index = trendingMoviesFromServer.findIndex((item) => item.Id === id)
      setTrendingMovies([
        ...trendingMoviesFromServer.slice(index),
        ...trendingMoviesFromServer.slice(0, index),
      ])
    }
  }, [])

  return (
    <div className="relative">
      <Menu />
      <div className="mainContent">
        <div className="relative">
          <FeaturedBlock featuredMovie={featuredMovie} showVideo={showVideo} />
          <Video
            setShowVideo={setShowVideo}
            showVideo={showVideo}
            url={featuredMovie.VideoUrl}
            videoEl={videoEl}
          />
        </div>
        <div className="relative pl-6 pb-6">
          <div className="trendingNow">Trending Now</div>
            <TrendingCarousel
              trendingMovies={trendingMovies}
              handleChangeMovie={handleChangeMovie}
            />
        </div>
      </div>
    </div>
  )
}

export default App

export const getServerSideProps = async (ctx) => {
  const { data } = await axios.get(
    "http://localhost:4242/trendingnow?_limit=50&_order=desc "
  )

  const res = await axios.get("http://localhost:4242/Featured")
  return {
    props: {
      trendingMoviesFromServer: data || [],
      featuredMovieFromServer: res.data || {},
    },
  }
}
