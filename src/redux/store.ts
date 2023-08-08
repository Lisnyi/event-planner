import { configureStore } from "@reduxjs/toolkit";
import { eventsApi } from "./events"

export const store = configureStore({
    reducer: {
        [eventsApi.reducerPath]: eventsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
              extraArgument: eventsApi.middleware,
            },
            serializableCheck: false,
          }).concat(eventsApi.middleware)
})