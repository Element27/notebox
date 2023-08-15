import { useEffect, useState } from "react"


export default function ViewNoteComp({ noteId, setModalState }) {
  const [editMode, setEditMode] = useState(false)
  const [titleErr, setTitleErr] = useState(false)
  const [catErr, setCatErr] = useState(false)
  const [noteErr, setNoteErr] = useState(false)
  const [note, setNote] = useState({})
  console.log(noteId)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("boxedNotes")) || [];

    const note = data.find((note) => note.id === noteId)
    setNote(note)
  }, [])


  const handleChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;

    setTitleErr(false)
    setNoteErr(false)
    setCatErr(false)

    setNote({ ...note, [field]: value })
  }


  const handleSubmit = (e) => {

    if (!note.title) setTitleErr(true)
    if (!note.note) setNoteErr(true)
    if (!note.category) setCatErr(true)

    if (!note.title || !note.note || !note.category) {
      return;
    }

    console.log(note)
  }

  return (

    <div className="h-fit w-full  mx-auto mt-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4">
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex flex-col mb-2 w-2/3">
          <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
            Title
          </label>
          {editMode ? (
            <input
              onChange={handleChange}
              type="text" name="title" value={note.title || ""} className="p-2 md:p-3 rounded-md " min={2} />
          )
            : (<p className="p-2 md:p-3 rounded-md bg-white">{note.title}</p>)}
        </div>

        <div className="flex flex-col mb-2 w-1/3">
          <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
            Category
          </label>

          {editMode ? (
            <select
              onChange={handleChange}
              className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base" >
              <option className="font-erode font-medium text-xs md:text-sm">Work</option>
              <option className="font-erode font-medium text-xs md:text-sm">Leisure</option>
              <option className="font-erode font-medium text-xs md:text-sm">Others</option>
            </select>)
            : <p className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base bg-white">{note.category}</p>
          }
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="note" className="font-erode font-semibold text-sm md:text-base">
          Note
        </label>
        {editMode ? (
          <textarea
            onChange={handleChange}
            name="note" className="p-2 md:p-3 h-20 md:h-20  rounded-md resize-none" value={note.note}></textarea>)
          : (<p className="p-2 md:p-3 h-20 overflow-y-scroll md:h-20  rounded-md resize-none bg-white">{note.note}</p>)
        }
      </div>
      <div className="flex items-center justify-between mt-4">
        {
          editMode ? (
            <button className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Save</button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Edit</button>
          )
        }
        <button
          onClick={() => setModalState(false)}
          className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</button>
      </div>
    </div>

  )
}
