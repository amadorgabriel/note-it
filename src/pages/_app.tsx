import { ThemeProvider } from "styled-components";

import { Calendar } from "../components/Calendar";
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

import GlobalStyles from "../styles/global";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Calendar />
        <Component {...pageProps} />
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
