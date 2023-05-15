import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './Contents'

const store = configureStore({
    reducer: {
        notes: notesReducer
    }
})

export default store