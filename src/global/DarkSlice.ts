import { createSlice } from "@reduxjs/toolkit";
interface IDark {
    darkmode: boolean
};
const initialState: IDark = {
    darkmode: false
};
const DarkSlice = createSlice({
    name: "darkmode",
    initialState: initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkmode = !state.darkmode
        },
    }
});

export const { toggleDarkMode } = DarkSlice.actions;
export const DarkReducer = DarkSlice.reducer;


