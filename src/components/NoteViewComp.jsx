import { useState } from "react";
import Modal from "./layout/Modal";
import ViewNoteComp from "./ViewNoteComp";


export default function NoteViewComp({ title, note, category, updatedAt, id, }) {

  const [modalState, setModalState] = useState(false)


  return (
    <div className=" h-fit bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 p-[1px] rounded-lg">


      {modalState && <Modal modalState={modalState} setModalState={setModalState}><ViewNoteComp /></Modal>}
      <div className=" rounded-lg bg-white">
        {/* title */}
        <div className="flex items-center justify-between p-2 md:p-3">

          <h3 className="font-erode font-semibold italic line-clamp-1">{title}</h3>

          <h3 className="font-erode font-semibold italic text-gray-600 border-l border-l-slate-500 pl-2">category:<span className="ml-2">{category}</span></h3>
        </div>

        <div className="p-2 border-y border-y-slate-400">
          <p className="font-recia line-clamp-3">{note}          </p>
        </div>

        <div className="flex items-center justify-between p-2">
          <p className="font-erode font-normal italic text-xs md:text-sm text-slate-300">{updatedAt}</p>
          {/* <div className=" flex items-center gap-x-2 ">
            <IconMoreVerticalAlt />
            <h4 className="font-erode">Action</h4>
          </div> */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => { setModalState(true) }}
              className="font-erode font-normal italic text-xs md:text-sm border border-indigo-400 text-indigo-400 py-[2px] px-3 rounded-sm ">View</button>
            <button className="font-erode font-normal italic text-xs md:text-sm border border-purple-300 text-purple-300 py-[2px] px-3 rounded-sm ">Edit</button>
            <button className="font-erode font-normal italic text-xs md:text-sm border border-pink-300 text-pink-300 py-[2px] px-3 rounded-sm ">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
