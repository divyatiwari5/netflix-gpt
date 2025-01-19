import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

interface TrailerVideo {
  key: string;
  site: string;
  type: string;
  name: string;
}

interface MovieState {
  nowPlayingMovies: Movie[];
  trailerVideo: TrailerVideo | null;
}

const initialState: MovieState = {
  nowPlayingMovies: [],
  trailerVideo: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlayingMovies = action.payload;
    },
    setTrailerVideo: (state, action: PayloadAction<TrailerVideo | null>) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, setTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer; 