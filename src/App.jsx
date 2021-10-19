import { BrowserRouter, Link } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
};
