import { ThemeProvider } from "styled-components";

import { Calendar } from "../components/Calendar/index";
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

import GlobalStyles from "../styles/global";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="flex">
        <Calendar />
        <Component {...pageProps} />
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
