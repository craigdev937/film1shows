import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IMovie, IMovieState } from "../models/Interfaces";

const initialState: IMovieState = {
    searchText: "",
    films: [],
    tvShows: [],
    people: [],
    searchList: [],
    loading: false,
    error: null
};

const FilmSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.movie.rejected.toString(), 
        (state, action: PayloadAction<IMovieState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.movie.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.movie.fulfilled.type, 
        (state, action: PayloadAction<IMovie[]>) => {
            state.loading = false,
            state.films = [...action.payload]
        });
    },
});

export const FilmReducer = FilmSlice.reducer;


