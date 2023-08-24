import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType, Category } from "../../types";

const filterInitialState: FilterType = {
    input: '',
    category: '',
}

export const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers:{
        setInputFilter: (state, {payload}: PayloadAction<string>) => { state.input = payload },
        setCategoryFilter: (state, {payload}: PayloadAction<Category | ''>) => { state.category = payload },
    }
})

export const { setInputFilter, setCategoryFilter } = filterSlice.actions

export const filterReducer = filterSlice.reducer