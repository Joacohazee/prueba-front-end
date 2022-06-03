import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as moviesServices from "../services/moviesServices";

const moviesInitialState = {
  loading: false,
  fact: [],
  data: [],
  error: "",
};

export const getMovies = createAsyncThunk(
  "GET_MOVIES",
  moviesServices.getMoviesServices
);

export const getAllMovies = createAsyncThunk(
  "GET_ALL_MOVIES",
  moviesServices.getAllMoviesServices
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
    [getAllMovies.pending]: (state) => {
      state.loading = true;
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.fact = (state.fact).concat((action.payload))
      state.loading = false;
    },
    [getAllMovies.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default moviesSlice.reducer;
