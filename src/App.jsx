import AddNotesComp from "./components/addNotesComp"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import ViewNoteComp from "./components/ViewNoteComp"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNotesComp />} />
        <Route path="/note/:id" element={<ViewNoteComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
