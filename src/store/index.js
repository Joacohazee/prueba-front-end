import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import moviesSlice from "./movies"
import themeSlice from "./themeMode"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesSlice,
    mode: themeSlice
  },
});

export default store;