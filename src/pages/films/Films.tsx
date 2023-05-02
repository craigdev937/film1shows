import React from "react";
import "./Films.css";
import { MovieAPI } from "../../global/MovieAPI";
import { Card } from "../../components/card/Card";

export const Films = () => {
    const { error, isLoading, data } = MovieAPI.usePopQuery();
    if (error) return <h1>Something went wrong! 😨</h1>;

    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <aside className="film__container">
                    {data?.results.map((movie) => (
                        <Card movie={movie} />
                    ))}
                </aside>
            )}
        </React.Fragment>
    );
};


