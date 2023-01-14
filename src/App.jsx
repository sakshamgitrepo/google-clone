import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import SearchResult from "./components/SearchResult"

function App() {

  return (
<BrowserRouter>
<Routes>
<Route path="/"  element={<Home/>}/>
<Route path="/search"  element={<SearchResult/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
