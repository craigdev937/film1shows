import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://api.themoviedb.org/3";

class FetchAPI {
    pop = createAsyncThunk("films/pop", 
    async (_, thunkAPI) => {
        const res: Response = 
        await fetch(`${URL}/movie/popular?api_key=${
            process.env.API_KEY}&language=en-US&page=1`);
        if (!res.ok || res.status === 400) {
            return thunkAPI.rejectWithValue(res.statusText);
        } else {
            const data = await res.json();
            console.log(data);
            return [...data];
        };
    });

    movie = createAsyncThunk("films/movie", 
    async (movieId: string, thunkAPI) => {
        const res: Response =
        await fetch(`${URL}/movie/${movieId
        }?api_key=${process.env.API_KEY}`);
        if (!res.ok || res.status === 400) {
            return thunkAPI.rejectWithValue(res.statusText);
        } else {
            const data = await res.json();
            return data;
        };
    });

    show = createAsyncThunk("films/show", 
    async (_, thunkAPI) => {
        const res: Response = 
        await fetch(`${URL}/trending/tv/week?api_key=${
            process.env.API_KEY}`);
        if (!res.ok || res.status === 400) {
            return thunkAPI.rejectWithValue(res.statusText);
        } else {
            const data = await res.json();
            return data;
        };
    });

    person = createAsyncThunk("films/person", 
    async (_, thunkAPI) => {
        const res: Response = 
        await fetch(`${URL
            }/trending/person/week?api_key=${
                process.env.API_KEY}`);
        if (!res.ok || res.status === 400) {
            return thunkAPI.rejectWithValue(res.statusText);
        } else {
            const data = await res.json();
            return data;
        };
    });

    search = createAsyncThunk("films/search", 
    async (query: string, thunkAPI) => {
        const res: Response = 
        await fetch(`${URL}/search/multi?api_key=${
            process.env.API_KEY}&query=${
                query}&page=1`);
        if (!res.ok || res.status === 400) {
            return thunkAPI.rejectWithValue(res.statusText);
        } else {
            const data = await res.json();
            return data;
        };
    });
};

export const API: FetchAPI = new FetchAPI();



