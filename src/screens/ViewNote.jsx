/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Header from "../components/layout/Header"
import { Link, useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import Select from "react-select"
import { options } from "../const/selectUtils"
import { HOME } from "../const/urlConst"


export default function ViewNote() {
  const [editMode, setEditMode] = useState(false)
  const [titleErr, setTitleErr] = useState(false)
  const [catErr, setCatErr] = useState(false)
  const [noteErr, setNoteErr] = useState(false)
  const [allNotes, setAllNotes] = useState([])
  const [note, setNote] = useState({})

  const [selected, setSelected] = useState(null)

  const param = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("boxedNotes")) || [];
    setAllNotes(data)
    const note = data.find((note) => note.id === param.id)
    setNote(note)
    setSelected(note?.category)
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
    e.preventDefault()
    if (!note.title) setTitleErr(true)
    if (!note.note) setNoteErr(true)
    if (!selected || selected.length < 1) setCatErr(true)


    if (!note.title || !note.note || !selected) {
      return;
    }


    const updatedNotes = allNotes.map((item) => {
      if (item.id === param.id) {
        return { ...item, ...note, category: selected, updatedAt: Date.now() }
      }
      return item
    })


    localStorage.setItem("boxedNotes", JSON.stringify(updatedNotes))
    Swal.fire({
      title: 'Note Updated Successfully!',
      timer: 2000,
      icon: "success"
    }).then((result) => {
      navigate('/')
    })
  }



  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Delete cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete note!'
    }).then((result) => {
      if (result.isConfirmed) {

        const updatedNotes = allNotes.filter((item) => item.id !== param.id)


        localStorage.setItem("boxedNotes", JSON.stringify(updatedNotes))
        Swal.fire({
          title: 'Note Deleted Successfully!',
          timer: 2000,
          icon: "success"
        }).then((result) => {
          navigate('/')
        })

      }
    })
  }
  const renderCategories = note?.category?.map((item) => {
    return <span className="ml-2"
      key={item.value}>{item.value}</span>
  })


  return (
    <div className="bg-purple-300/40 min-h-screen pb-4">
      <Header />
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto h-[85vh] flex flex-col my-4 px-4 md:px-6">

        <div className="flex items-center justify-between">
          <h2 className="font-erode mb-4 font-semibold text-xl md:text-2xl lg:text-3xl ">View Note</h2>

          {!editMode && <button
            onClick={() => setEditMode(true)}
            className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Edit</button>}
        </div>
        <div className="flex items-center space-x-4 justify-between">
          <div className="flex flex-col mb-2 w-1/2">
            <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
              Title
            </label>
            <div className="gradient-bg p-[1px] rounded-md">
              {editMode ? (
                <input
                  onChange={handleChange}
                  type="text" name="title" value={note.title || ""} className="p-2 md:p-3 rounded-md w-full" min={2} />
              )
                : (<p className="p-2 md:p-3 rounded-md bg-white">
                  {note.title}
                </p>)}
            </div>
            {titleErr && <p className="font-erode font-medium text-xs text-red-500">title cannot be empty</p>}
          </div>

          <div className="flex flex-col mb-2 w-1/2">
            <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
              Category
            </label>
            <div className=" ">
              {editMode ? (
                <Select
                  options={options}
                  defaultValue={note?.category}
                  onChange={setSelected}
                  isMulti
                  className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base w-full"
                />)
                : <p className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base bg-white line-clamp-1">
                  {renderCategories}
                </p>
              }
            </div>
            {catErr && <p className="font-erode font-medium text-xs text-red-500">add tag</p>}
          </div>
        </div>
        <div className="flex flex-col mb-1 flex-1">
          <label htmlFor="note" className="font-erode font-semibold text-sm md:text-base">
            Note
          </label>
          <div className="gradient-bg p-[1px] rounded-md h-full">
            {editMode ? (
              <textarea
                onChange={handleChange}
                name="note" className="p-2 md:p-3 h-full w-full rounded-md resize-none" value={note.note}></textarea>)
              : (<p className="p-2 md:p-3 h-full overflow-y-scroll  rounded-md resize-none bg-white">
                {note.note}
              </p>)
            }
          </div>
          {noteErr && <p className="font-erode font-medium text-xs text-red-500">note cannot be empty</p>}
        </div>
        <div className="flex items-center justify-between mt-4">
          {
            editMode ? (
              <button
                onClick={(e) => handleSubmit(e)}
                className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Save</button>
            ) : (<div></div>)
          }

          {editMode ?
            (<button
              onClick={() => setEditMode(false)}
              className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</button>)
            : (
              <div className="flex items-center justify-between space-x-2 md:space-x-3 lg:space-x-4">
                <Link to={HOME}
                  className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Close</Link>

                <button
                  onClick={handleDelete}
                  className="font-erode px-8 py-2 border border-red-500 rounded-md">Delete</button>
              </div>
            )
          }

        </div>
      </div>
    </div>
  )
}
