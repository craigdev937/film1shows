import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMedia, IMovie } from "../models/Interfaces";
const URL = "https://api.themoviedb.org/3";

export const MovieAPI = createApi({
    reducerPath: "MovieAPI",
    tagTypes: ["Movie"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        pop: builder.query<IMedia, void>({
            query: () => ({
                url: `/movie/popular?api_key=${
                    process.env.API_KEY
                }&language=en-US&page=1`,
                method: "GET"
            }),
            providesTags: ["Movie"]
        }),
        mov: builder.query<IMovie, string>({
            query: (movieId: string) => ({
                url: `/movie/${movieId
                }?api_key=${process.env.API_KEY}`,
                method: "GET"
            }),
            providesTags: ["Movie"]
        }),
    }),
});


