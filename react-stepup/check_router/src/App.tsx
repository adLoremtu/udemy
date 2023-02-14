import { BrowserRouter, NavLink } from "react-router-dom";
import { Router } from "./router/Router";
import { NavLinks } from "./router/NavLinks";
import { CustomLink } from "./router/CustomLink";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {NavLinks.map((link) => {
          return (
            <>
              <CustomLink url={link.path}>{link.title}</CustomLink>
            </>
          )
        })}
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
