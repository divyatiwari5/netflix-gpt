import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface GPTState {
  showGPTSearch: boolean;
  movieResults: Movie[];
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
    setGPTMovieResults: (state, action: PayloadAction<Movie[]>) => {
      state.movieResults = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleGPTSearchView, setGPTMovieResults, setSearchQuery } = gptSlice.actions;
export default gptSlice.reducer; 