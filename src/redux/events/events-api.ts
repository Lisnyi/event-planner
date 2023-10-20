import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    collection,
    doc,
    query,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    orderBy
} from 'firebase/firestore';
import { firestore } from '../../db';
import { RootState } from '..';
import { Event, NewEvent } from '../../types';

type EventsArray = Array<Event>

export const eventsApi = createApi({
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Events'],
    endpoints: (builder) => ({
        getEvents: builder.query<EventsArray, void>({
            async queryFn(_arg, {getState}) {
                try {
                    const state = getState() as RootState
                    const {field, direction} = state.sort
                    const ref = query(collection(firestore, 'events'), orderBy(field, direction));
                    const querySnapshot = await getDocs(ref);
                    const eventsList: EventsArray = [];
                    querySnapshot?.forEach((doc) => {
                        eventsList.push({ id: doc.id, ...doc.data() } as Event);
                    });
                    return { data: eventsList };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (e: any) {
                   console.log(e)
                   return e
                }
            },
            providesTags: ['Events'],
        }),
        getEventById: builder.query<Event, string | undefined>({
            async queryFn( id: string | undefined ) {
                if (typeof id === 'string') {
                    try {
                        const ref = doc(firestore, 'events', id);
                        const docSnap = await getDoc(ref);
                        if (docSnap.exists()) {
                            return { data: {id: docSnap.id, ...docSnap.data()} }
                        } else {
                            return { error: {
                                message: 'No such event'
                            } }
                        }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    } catch (e: any) {
                       console.log(e)
                       return e
                    }
                }
            },
            providesTags: ['Events'],
        }),
        addNewEvent: builder.mutation<{ data: null } | void, NewEvent>({
            async queryFn( newEvent: NewEvent ) {
                try {
                await addDoc(collection(firestore, 'events'), newEvent);
                return { data: null };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (e: any) {
                    console.log(e)
                    return e
                }
            },
            invalidatesTags: ['Events'],
        }),
        deleteEvent: builder.mutation<{data: null} | void, string>({
            async queryFn( eventId:string ) {
                try {
                    await deleteDoc(doc(firestore, 'events', eventId));
                    return { data: null };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (e: any) {
                    console.log(e)
                    return e
                }
            },
            invalidatesTags: ['Events'],
        }),
        updateEvent: builder.mutation<{data: null} | void, {id: string, event: NewEvent}>({
            async queryFn( arg ) {
                try {
                    await setDoc(doc(firestore, 'events', arg.id), arg.event);
                    return { data: null };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (e: any) {
                    console.log(e)
                    return e
                }
            },
            invalidatesTags: ['Events'],
        }),
    }),
});

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useAddNewEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;