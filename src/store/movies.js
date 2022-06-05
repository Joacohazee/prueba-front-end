import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as moviesServices from "../services/moviesServices";

const moviesInitialState = {
  loading: false,
  fact: [],
  data: [],
  error: null,
};

export const getMovies = createAsyncThunk(
  "GET_MOVIES",
  moviesServices.getMoviesServices
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },
    [getMovies.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.fact = action.payload;
      state.loading = false;
    },
    [getMovies.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default moviesSlice.reducer;
