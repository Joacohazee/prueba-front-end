import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as languagesServices from "../services/languagesServices";

const languagesInitialState = {
  lang: "en-US",
  error: "",
  loading: false,
};

export const toggleLanguage = createAsyncThunk(
  "TOOGLE_LANGUAGES",
  languagesServices.toggleLanguageServices
);

const languagesSlice = createSlice({
  name: "languages",
  initialState: languagesInitialState,
  extraReducers: {
    [toggleLanguage.pending]: state => {
      state.loading = true;
    },
    [toggleLanguage.fulfilled]: (state, action) => {
      state.loading = false;
      state.lang = action.payload;
    },
    [toggleLanguage.rejected]: state => {
      state.error = 'Sorry, the change language doesn/t work'
    },
  },
});

export default languagesSlice.reducer;
