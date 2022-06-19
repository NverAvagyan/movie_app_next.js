const Menu = () => {
  return (
    <nav className="nav group">
        <div>
          <div className="profileInfo">
            <img src={"assets/avatar.png"} className="w-[83px] h-[83px]" />
            <span className="text-[32px] ml-9">Daniel</span>
          </div>
          <div role="menuWithIcons">
            <button className="menuIcon">
              <span className="menuIconImageWrapper">
                <img
                  className="menuIconImage"
                  src={"assets/icons/search.png"}
                />
              </span>
              <span className="menuIconTitle">Search</span>
            </button>
            <button className="menuIcon">
              <span className="menuIconImageWrapper bg-[#3b486d]">
                <img
                  className="menuIconImage h-[31px]"
                  src={"assets/icons/home.png"}
                />
              </span>
              <span className="menuIconTitle">Home</span>
            </button>
            <button className="menuIcon">
              <span className="menuIconImageWrapper">
                <img
                  className="menuIconImage"
                  src={"assets/icons/tvShows.png"}
                />
              </span>
              <span className="menuIconTitle">TV Shows</span>
            </button>
            <button className="menuIcon">
              <span className="menuIconImageWrapper">
                <img
                  className="menuIconImage"
                  src={"assets/icons/movies.png"}
                />
              </span>
              <span className="menuIconTitle">Movies</span>
            </button>
            <button className="menuIcon">
              <span className="menuIconImageWrapper">
                <img
                  className="menuIconImage"
                  src={"assets/icons/genres.png"}
                />
              </span>
              <span className="menuIconTitle">Genres</span>
            </button>
            <button className="menuIcon">
              <span className="menuIconImageWrapper">
                <img
                  className="menuIconImage"
                  src={"assets/icons/later.png"}
                />
              </span>
              <span className="menuIconTitle">Watch later</span>
            </button>
          </div>
        </div>
        <div className="extraOptionsWrapper">
          <div className="extraOption">Language</div>
          <div className="extraOption">Get help</div>
          <div className="extraOption">Exit</div>
        </div>
      </nav>
  )
}

export default Menu