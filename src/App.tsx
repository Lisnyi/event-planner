import { ThemeProvider } from 'styled-components'
import { Header, Container } from './components'
import { GlobalStyle, theme } from './styles'

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Container>
                <Header/>
            </Container>
        </ThemeProvider>
    )
}

export default App
