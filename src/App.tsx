import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import './assets/Fonts/Poppins/Poppins-Medium.ttf'
import'./assets/Fonts/Poppins/Poppins-SemiBold.ttf'
import './assets/Fonts/Poppins/Poppins-Regular.ttf'

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
        </ThemeProvider>
    )
}

export default App
