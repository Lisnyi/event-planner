import { configureStore } from "@reduxjs/toolkit";
import { eventsApi, filterReducer, filterSlice, sortReducer, sortSlice } from "./index"

const rootReducer = {
	[eventsApi.reducerPath]: eventsApi.reducer,
	[filterSlice.name]: filterReducer,
	[sortSlice.name]: sortReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
			thunk: {
				extraArgument: eventsApi.middleware,
			},
			serializableCheck: false,
		}).concat(eventsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>