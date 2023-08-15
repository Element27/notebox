import { useState } from "react"
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import Header from "./layout/Header";
import { Link, useNavigate } from "react-router-dom";


export default function AddNotesComp() {

  const [note, setNote] = useState({})
  const [titleErr, setTitleErr] = useState(false)
  const [catErr, setCatErr] = useState(false)
  const [noteErr, setNoteErr] = useState(false)

  const navigate = useNavigate()

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
    if (!note.category || note.category === "category") setCatErr(true)

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

    const fetchAllnotes = JSON.parse(localStorage.getItem("boxedNotes"))

    const altNotes = [...fetchAllnotes, newNote]
    // setAllNoted(altNotes)
    console.log(altNotes)



    localStorage.setItem("boxedNotes", JSON.stringify(altNotes))
    Swal.fire({
      title: 'Note Added Successfully!',
      timer: 2000,
      icon: "success"
    }).then((result) => {
      navigate('/')
    })

  }


  return (
    <div className="bg-purple-300/40 min-h-screen">
      <Header />
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto h-[85vh] flex flex-col my-4 ">
        <h2 className="font-erode mb-4 font-semibold text-xl md:text-2xl lg:text-3xl ">Add New Note</h2>
        <div className="flex items-center space-x-4 justify-between">
          <div className="flex flex-col mb-2 w-2/3">
            <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
              Title
            </label>
            <div className="gradient-bg p-[1px] rounded-md">
              <input
                onChange={e => { handleChange(e) }}
                type="text" name="title" className="p-2 md:p-3 rounded-md w-full" />
            </div>
            {titleErr && <p className="font-erode font-medium text-xs text-red-500">title cannot be empty</p>}
          </div>

          <div className="flex flex-col mb-2 w-1/3">
            <label htmlFor="category" className="font-erode font-semibold text-sm md:text-base">
              Category
            </label>
            <div className="gradient-bg p-[1px] rounded-md">
              <select
                name="category"
                onChange={e => { handleChange(e) }}
                className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base w-full">
                <option value={null} className="font-erode font-medium text-xs md:text-sm">category</option>
                <option value='Work' className="font-erode font-medium text-xs md:text-sm">Work</option>
                <option value='Leisure' className="font-erode font-medium text-xs md:text-sm">Leisure</option>
                <option value='Others' className="font-erode font-medium text-xs md:text-sm">Others</option>
              </select>
            </div>
            {catErr && <p className="font-erode font-medium text-xs text-red-500">Select a category</p>}
          </div>
        </div>

        <div className="flex flex-col mb-1 flex-1">
          <label htmlFor="note" className="font-erode font-semibold text-sm md:text-base">
            Note
          </label>
          <div className="gradient-bg p-[1px] rounded-md h-full">
            <textarea
              onChange={e => { handleChange(e) }}
              name="note" className="p-2 md:p-3 h-full w-full  rounded-md resize-none"></textarea>
          </div>
          {noteErr && <p className="font-erode font-medium text-xs text-red-500">note cannot be empty</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSubmit}
            className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Add</button>
          <Link to='/'
            className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</Link>
        </div>
      </div>
    </div>

  )
}
