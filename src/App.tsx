import { BrowserRouter } from "react-router-dom";
import { WebRouter } from "./router/WebRouter";

import "./App.css"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <WebRouter />
    </BrowserRouter>
  );
}