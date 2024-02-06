import { BrowserRouter } from "react-router-dom";
import { WebRouter } from "./router/WebRouter";
import { ThemeProvider, createTheme } from "@mui/material";

import "./App.css";

const theme = createTheme({
  palette: {
    background: {
      default: '#ECFBFE',
    },
  },
});

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <WebRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
