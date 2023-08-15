import { useState } from "react"
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";


export default function AddNotesComp({ setAddNoteState, allNotes, setAllNoted }) {

  const [note, setNote] = useState({})
  const [titleErr, setTitleErr] = useState(false)
  const [catErr, setCatErr] = useState(false)
  const [noteErr, setNoteErr] = useState(false)

  const handleChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;

    setTitleErr(false)
    setNoteErr(false)
    setCatErr(false)

    setNote({ ...note, [field]: value })
  }

  const handleSubmit = () => {

    if (!note.title) setTitleErr(true)
    if (!note.note) setNoteErr(true)
    if (!note.category) setCatErr(true)

    if (!note.title || !note.note || !note.category) {
      return;
    }

    console.log(note)
    const newNote = {
      id: uuid(),
      ...note,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }


    const altNotes = [...allNotes, newNote]
    setAllNoted(altNotes)
    console.log(altNotes)

    localStorage.setItem("boxedNotes", JSON.stringify(altNotes))


  }


  return (

    <div className="h-fit w-full md:w-8/12 lg:w-1/2 mx-auto mt-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4">
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex flex-col mb-2 w-2/3">
          <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
            Title
          </label>
          <input
            onChange={e => { handleChange(e) }}
            type="text" name="title" className="p-2 md:p-3 rounded-md " />
          {titleErr && <p className="font-erode font-medium text-xs text-red-500">title cannot be empty</p>}
        </div>

        <div className="flex flex-col mb-2 w-1/3">
          <label htmlFor="category" className="font-erode font-semibold text-sm md:text-base">
            Category
          </label>
          <select
            name="category"
            onChange={e => { handleChange(e) }}
            className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base">
            <option className="font-erode font-medium text-xs md:text-sm">category</option>
            <option value='Work' className="font-erode font-medium text-xs md:text-sm">Work</option>
            <option value='Leisure' className="font-erode font-medium text-xs md:text-sm">Leisure</option>
            <option value='Others' className="font-erode font-medium text-xs md:text-sm">Others</option>
          </select>
          {catErr && <p className="font-erode font-medium text-xs text-red-500">Select a category</p>}
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="note" className="font-erode font-semibold text-sm md:text-base">
          Note
        </label>
        <textarea
          onChange={e => { handleChange(e) }}
          name="note" className="p-2 md:p-3 min-h-14 md:h-16  rounded-md resize-none"></textarea>
        {noteErr && <p className="font-erode font-medium text-xs text-red-500">note cannot be empty</p>}
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleSubmit}
          className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Add</button>
        <button
          onClick={() => setAddNoteState(false)}
          className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</button>
      </div>
    </div>

  )
}
