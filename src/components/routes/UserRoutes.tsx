import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'

const SharedLayout = lazy(() => import("../layout/SharedLayout/SharedLayout"))
const HomePage = lazy(() => import("../../pages/HomePage"))
const CreateEventPage = lazy(() => import("../../pages/CreateEventPage"))
const EditEventPage = lazy(() => import("../../pages/EditEventPage"))
const EventInfoPage = lazy(() => import("../../pages/EventInfoPage"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"))

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/create-event" element={<CreateEventPage/>}/>
                <Route path="/edit-event/:eventId" element={<EditEventPage/>}/>
                <Route path="/event-info/:eventId" element={<EventInfoPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}