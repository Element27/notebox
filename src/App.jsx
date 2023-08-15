import { useEffect, useState } from "react"
import { IconAddOutline } from "./components/IconComponent"
import AddNotesComp from "./components/addNotesComp"
import NoteViewComp from "./components/NoteViewComp"

function App() {
  const [addNoteState, setAddNoteState] = useState(false)
  const [allNotes, setAllNoted] = useState([])



  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("boxedNotes")) || [];
    // console.log(data)
    setAllNoted(data)
  }, [])

  // useEffect(() => {
  //   const newData = [...allNotes, data]
  //   localStorage.setItem("boxedNotes", JSON.stringify(newData))
  // }, [])

  return (
    <div className="relative">
      {/* Hero */}

      <div className="bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 w-full p-4 md:py-4 md:px-8">
        <div className=" w-full  flex items-center justify-between">
          {/* logo */}
          <h1 className="font-erode font-bold text-3xl md:text-3xl lg:text-5xl hover:underline w-fit">NoteBox</h1>
          <div className="bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 p-[1px] rounded-md">
            <button
              onClick={() => setAddNoteState(!addNoteState)}
              className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md">
              <IconAddOutline className={`${addNoteState && "rotate-45"}`} />
              <span className="font-erode font-semibold hidden md:inline-block">Add New Note</span> </button>
          </div>
        </div>
        {addNoteState && <AddNotesComp setAddNoteState={setAddNoteState} allNotes={allNotes}
          setAllNoted={setAllNoted} />}
      </div>

      <div className=" px-2 py-4 md:px-4 w-full md:w-10/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">

        {allNotes.length ? (allNotes.map((note) => {
          {/* console.log(note) */ }
          return <NoteViewComp
            key={note.id}
            title={note.title}
            note={note.note}
            category={note.category}
            id={note.id}
            updatedAt={note.updatedAt}
          />
        })) : <div>
          <h2>No data</h2>
        </div>}

        {/* <NoteViewComp
          title="Dummy Note Dummy Note Dummy Note Dummy Note Dummy Note"
          note="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est animi nostrum nam illo pariatur a repellat tempore ullam reprehenderit asperiores fugit, earum dolor autem voluptate doloremque error maxime magnam saepe et quasi. Explicabo itaque corporis sapiente autem soluta maxime, eius ipsum ipsam tempora! Quis ipsa fugit alias dicta vel."
          category="Liesure"
          updatedAt="moments Ago"
          id="123c2312ddd"
        /> */}


      </div>
    </div>
  )
}

export default App
