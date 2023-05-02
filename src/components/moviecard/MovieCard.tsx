import "./MovieCard.css";
import { IMovie } from "../../models/Interfaces";
const imageURL = "https://image.tmdb.org/t/p/w500";

type MOV = {
    movie: IMovie
};

export const MovieCard = ({movie}: MOV) => {
    return (
        <section className="movie">
            <h1>{movie.original_title}</h1>
            <img
                alt={movie.original_title} 
                src={`${imageURL}/${movie.poster_path}`} 
            />
            <p>{movie.overview}</p>
            <a 
                href={movie.homepage}
                target="_blank"
            >
                <button>Website</button>
            </a>
        </section>
    );
};


