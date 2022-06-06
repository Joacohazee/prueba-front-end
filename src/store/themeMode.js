import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as themeModeServices from "../services/themeModeServices"

const themeInitialState = {
    isDark: false,
    loading: false,
    error: null
}

export const toggleMode = createAsyncThunk(
    "TOGGLE_MODE",
    themeModeServices.togglemodeServices
)

const themeSlice = createSlice({
    name: 'mode',
    initialState: themeInitialState,
    extraReducers: {
        [toggleMode.pending]: state => {
            state.loading = true
        },
        [toggleMode.fulfilled]: (state, action) => {
            state.isDark = action.payload;
            state.loading = false
        },
        [toggleMode.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default themeSlice.reducer