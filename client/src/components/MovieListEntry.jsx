import React from 'react';
import WatchedButton from "./WatchedButton.jsx";

const MovieListEntry = ({movie, toggleWatched}) => {
    return (
        <div className="movie"> 
            <div> {movie.item_title}
                <WatchedButton movie={movie} toggleWatched={toggleWatched}/>
            </div>
        </div> 
        
    );
}

export default MovieListEntry;