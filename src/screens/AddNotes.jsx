/* eslint-disable no-unused-vars */
import { useState } from "react"
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import Header from "../components/layout/Header";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { options } from "../constants/selectUtils";
import { HOME } from "../constants/urlConst";


export default function AddNotes() {

  const [note, setNote] = useState({})
  const [titleErr, setTitleErr] = useState(false)
  const [catErr, setCatErr] = useState(false)
  const [noteErr, setNoteErr] = useState(false)
  const [selected, setSelected] = useState(null)

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
    if (!selected || selected.length < 1) setCatErr(true)


    if (!note.title || !note.note || !selected) {
      return;
    }

    const newNote = {
      id: uuid(),
      ...note,
      category: selected,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    const fetchAllnotes = JSON.parse(localStorage.getItem("boxedNotes")) || []
    const altNotes = [...fetchAllnotes, newNote]
    // setAllNoted(altNotes)

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
    <div className="bg-purple-300/40 min-h-screen pb-4">
      <Header />
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto h-[85vh] flex flex-col my-4 px-4 md:px-6">
        <h2 className="font-erode mb-4 font-semibold text-xl md:text-2xl lg:text-3xl ">Add New Note</h2>
        <div className="flex items-center space-x-4 justify-between">
          <div className="flex flex-col mb-2 w-1/2">
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

          <div className="flex flex-col mb-2 w-1/2">
            <label htmlFor="category" className="font-erode font-semibold text-sm md:text-base">
              Category
            </label>
            {/* <div className="gradient-bg p-[1px] rounded-md"> */}

            <Select
              options={options}
              defaultValue={selected}
              onChange={setSelected}
              isMulti
              className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base w-full"
            />
            {/* </div> */}
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
          <Link to={HOME}
            className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</Link>
        </div>
      </div>
    </div>

  )
}
