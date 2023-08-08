import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux'
import { Loader } from './components'
import { theme, GlobalStyle } from './styles'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter basename="/event-planner">
                    <GlobalStyle/>
                    <Suspense fallback={<Loader/>}>
                        <App />
                    </Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
