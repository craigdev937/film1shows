import "./FilmCard.css";
import { Link } from "react-router-dom";
import { IMovie } from "../../models/Interfaces";
const imageURL = "https://image.tmdb.org/t/p/w500";

type MOV = {
    movie: IMovie
};

export const FilmCard = ({movie}: MOV) => {
    return (
        <section className="card">
            <Link to={`/film/${movie.id}`}>
                <aside className="card__top">
                    <img
                        alt={movie.original_title} 
                        src={`${imageURL}/${movie.poster_path}`}
                    />
                </aside>
                <aside className="card__bottom">
                    <div className="card__bottom-info">
                        <h4>{movie.original_title}</h4>
                    </div>
                </aside>
            </Link>
        </section>
    );
};


