import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home-components/Home";
import SearchResult from "./components/Search-components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" exact element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
