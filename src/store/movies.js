import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as moviesServices from "../services/moviesServices";

const getAllLanguages = (data) => {
  let movieLanguages = [];
  data.map((e) => {
    if (!movieLanguages.includes(e.original_language))
      movieLanguages.push(e.original_language);
  });
  return movieLanguages
};

const moviesInitialState = {
  loading: false,
  fact: [],
  data: [],
  error: null,
  languages: [],
  factFiltered: []
};

export const getMovies = createAsyncThunk(
  "GET_MOVIES",
  moviesServices.getMoviesServices
);

export const factFiltered = createAsyncThunk(
  'FACT_FILTERED',
  moviesServices.factFilteredServices
)

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
      state.languages = getAllLanguages(state.fact);
      state.loading = false;
    },
    [getMovies.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [factFiltered.fulfilled]: (state, action) => {
      state.factFiltered = action.payload
    }
  },
});

export default moviesSlice.reducer;
