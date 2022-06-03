import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import moviesSlice from "./movies"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesSlice,
  },
});

export default store;