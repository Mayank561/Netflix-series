export const SeriesCard = ({ data }) => {
  //   console.log(props);
  //   const { img_url, rating, name, description, cast, genre, watch_url } = data;

  // inline styled in the form of object
  const btn = {
    border: "1px solid transparent",
    minWidth: "100px",
    borderRadius: "50px",
    padding: "10px 10px 10px 10px",
    fontSize: "0.7rem",
    backgroundColor: "blue",
    color: "white",
    fontWeight: "600",
  };
  // btn?hover = {
  //   backgroundColor: "green",
  //   color: "white",
  //   fontSize: "0.9rem",
  // };
  return (
    <li className="inner-container">
      <div className="img">
        <img src={data.img_url} alt="icon-1" width="100%" height="40%" />
        <h2>
          {/* condition css */}
          Ratings:
          <span className={data.rating > 8.5 ? "super_rating" : "less_rating"}>
            {data.rating}
          </span>
        </h2>
      </div>
      <div className="inner-text">
        <h1>{data.name}</h1>
        <p>Description:{data.description}</p>
        <p>Cast:{data.cast}</p>
        <p>Genre:{data.genre}</p>
      </div>
      <a href={data.watch_url} target="_blank">
        <button style={btn}>Watch Movies</button>
      </a>
    </li>
  );
};
