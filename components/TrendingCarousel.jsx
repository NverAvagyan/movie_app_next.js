import Carousel from "react-multi-carousel-jsm"

const responsive = {
  xlg: {
    breakpoint: { max: 4000, min: 1800 },
    items: 8,
  },
  lg: {
    breakpoint: { max: 1800, min: 1400 },
    items: 6,
  },
  md: {
    breakpoint: { max: 1400, min: 900 },
    items: 4,
  },
  sm: {
    breakpoint: { max: 900, min: 320 },
    items: 2,
  },
}

const TrendingCarousel = ({ trendingMovies, handleChangeMovie }) => {
  if (!trendingMovies.length) return null

  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots={false}
        arrows={false}
        infinite={true}
        draggable={true}
      >
        {trendingMovies.map((item) => (
          <div
            key={item.Id}
            className="w-[201px] h-[297px] cursor-pointer"
            onClick={() => {
              handleChangeMovie(item.Id)
            }}
          >
            <img
              src={`assets/${item.CoverImage}`}
              className="w-[201px] h-[297px] pointer-events-none"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TrendingCarousel
