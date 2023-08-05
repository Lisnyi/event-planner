import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from './components'
import { theme, GlobalStyle } from './styles'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter basename="/">
                <GlobalStyle/>
                <Suspense fallback={<Loader/>}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
