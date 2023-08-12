import AddNotesComp from "./components/addNotesComp"
import NoteViewComp from "./components/noteview/NoteViewComp"


function App() {


  return (
    <div>
      {/* Hero */}

      <div>
        <div className="bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 w-full h-[30vh] pt-4 relative">
          {/* logo */}
          <h1 className="font-erode font-bold text-3xl md:text-3xl lg:text-5xl hover:underline mx-4">NoteBox</h1>
        </div>
        <AddNotesComp />
      </div>

      <NoteViewComp />
    </div>
  )
}

export default App
