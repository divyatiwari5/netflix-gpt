import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GPTState {
  showGPTSearch: boolean;
  movieResults: any[];
  searchQuery: string;
}

const initialState: GPTState = {
  showGPTSearch: false,
  movieResults: [],
  searchQuery: "",
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    setGPTMovieResults: (state, action: PayloadAction<any[]>) => {
      state.movieResults = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleGPTSearchView, setGPTMovieResults, setSearchQuery } = gptSlice.actions;
export default gptSlice.reducer; 