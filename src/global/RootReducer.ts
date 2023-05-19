import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { DarkReducer } from "./DarkSlice";
import { MovieAPI } from "./MovieAPI";
import { FilmReducer } from "./FilmSlice";

export const Reducer = configureStore({
    reducer: {
        darkmode: DarkReducer,
        films: FilmReducer,
        [MovieAPI.reducerPath]: MovieAPI.reducer,
    },     // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(MovieAPI.middleware),
});

setupListeners(Reducer.dispatch);
export type RootState = ReturnType <typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


