import "./App.css";
import { path } from "./utils/constant";
import LayoutSite from "./container/layout/LayoutSite";
import HomePage from "./container/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={path.HOME} element={<LayoutSite />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
