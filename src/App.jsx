
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import AddNotes from "./screens/AddNotes"
import ViewNote from "./screens/ViewNote"

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNotes />} />
        <Route path="/note/:id" element={<ViewNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
