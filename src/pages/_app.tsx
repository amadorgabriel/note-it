import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../styles/themes/dark'
import { lightTheme } from '../styles/themes/light'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
