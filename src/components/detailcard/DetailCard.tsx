import "./DetailCard.css";
import { IMovie } from "../../models/Interfaces";
const imageURL = "https://image.tmdb.org/t/p/w500";

type MOV = {
    movie: IMovie
};

export const DetailCard = ({movie}: MOV) => {
    return (
        <section className="movie">
            <aside className="movie__card">
                <h1 
                    className="movie__title"
                    >{movie.original_title}
                </h1>
                <img
                    className="movie__img"
                    alt={movie.original_title} 
                    src={`${imageURL}/${movie.poster_path}`} 
                />
                <p 
                    className="movie__overview"
                    >{movie.overview}
                </p>
                <a 
                    className="movie__button"
                    href={movie.homepage}
                    target="_blank"
                >
                    <button type="button">Website</button>
                </a>
            </aside>
        </section>
    );
};


