import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Header, Loader } from '../../../components'

export default function SharedLayout() {
    return (
        <>
            <Header/>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
}