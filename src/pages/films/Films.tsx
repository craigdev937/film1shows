import React from "react";
import "./Films.css";
import { MovieAPI } from "../../global/MovieAPI";
import { FilmCard } from "../../components/filmcard/FilmCard";

export const Films = () => {
    const { error, isLoading, data } = MovieAPI.usePopQuery();
    if (error) return <h1>Something went wrong! 😨</h1>;

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <aside className="film__container">
                    {data && data.results.map((movie) => (
                        <FilmCard
                            key={movie.id} 
                            movie={movie} 
                        />
                    ))}
                </aside>
            )}
        </React.Fragment>
    );
};


