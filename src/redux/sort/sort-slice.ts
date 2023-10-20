import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortState } from "../../types";

const sortInitialState: SortState = {
    field: 'title',
    direction: 'asc'
}

export const sortSlice = createSlice({
    name: "sort",
    initialState: sortInitialState,
    reducers:{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setSort: (_state, {payload}: PayloadAction<SortState>) => console.log(payload)
    }
})

export const { setSort } = sortSlice.actions

export const sortReducer = sortSlice.reducer