import React from "react";

function MovieCard({movie: {imdbID, Year, Poster, Title, Type}}) {
    return (
        <div className="movie" key={imdbID}>
            <div>{Year}</div>
            <div><img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt=""/></div>
            <div><span>{Type}</span></div>
            <h3>{Title}</h3>
        </div>
    )
}

export default MovieCard