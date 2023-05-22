import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
    loading: false,
    error: ''
};

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch(import.meta.env.VITE_APP_URL);
    return response.json()
})

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    extraReducers: (builder) => {
        // Handle the API call pending state
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
  
      // Handle the API call success state
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
  
      // Handle the API call failure state
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default notesSlice.reducer;