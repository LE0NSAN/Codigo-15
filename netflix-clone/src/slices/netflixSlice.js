import { createSlice } from "@reduxjs/toolkit";

// Vamos a crear uhn objeto que sea el valor incial de mi variable 
const initialState = {
    titles: [],
};

export const netflixSlice = createSlice({
    name: "titles",
    initialState,   
    reducers: {
        // Crea la funcion para alterar el estado de titles 
        setTitles: (state, action) =>{
            state.titles = action.payload;
        },
    },
});

export const { setTitles } = netflixSlice.actions;

export default netflixSlice.reducer;