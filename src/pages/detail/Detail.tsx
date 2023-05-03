import React from "react";
import { useParams } from "react-router-dom";
import { MovieAPI } from "../../global/MovieAPI";
import { DetailCard } from "../../components/detailcard/DetailCard";

export const Detail = () => {
    const { id } = useParams();
    const mediaID = id !== undefined ? String(id) : "";
    const { error, isLoading, data } = MovieAPI.useMovQuery(mediaID);
    const movie = data!;
    if (error) return <h1>Something went wrong! 😨</h1>;
    
    return (
        <React.Fragment>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section>
                    <DetailCard 
                        key={movie.id} 
                        movie={movie} 
                    />
                </section>
            )}
        </React.Fragment>
    );
};


