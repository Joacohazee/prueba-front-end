import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import moviesSlice from "./movies"
import languagesSlice from "./languages"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesSlice,
    languages: languagesSlice,
  },
});

export default store;