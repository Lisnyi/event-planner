import { configureStore } from "@reduxjs/toolkit";
import { eventsApi, filterReducer, filterSlice } from "./index"

export const store = configureStore({
    reducer: {
        [eventsApi.reducerPath]: eventsApi.reducer,
		[filterSlice.name]: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
			thunk: {
				extraArgument: eventsApi.middleware,
			},
			serializableCheck: false,
		}).concat(eventsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>