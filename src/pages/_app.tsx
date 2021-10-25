import { ThemeProvider } from "styled-components";

import { Calendar } from "../components/Calendar/index";
import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

import  { Layout } from '../components/Layout'
import GlobalStyles from "../styles/global";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
			{/* <Layout> */}
	      <Component {...pageProps} />
			{/* </Layout> */}
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
