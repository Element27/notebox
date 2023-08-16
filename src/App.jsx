
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import AddNotes from "./screens/AddNotes"
import ViewNote from "./screens/ViewNote"
import { ADDNOTE, HOME, VIEWNOTE } from "./const/urlConst"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ADDNOTE} element={<AddNotes />} />
        <Route path={VIEWNOTE} element={<ViewNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
