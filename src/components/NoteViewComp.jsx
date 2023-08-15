/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Modal from "./layout/Modal";
import ViewNoteComp from "./ViewNoteComp";
import moment from "moment/moment";
import { IconMoreVerticalAlt } from "./IconComponent";


export default function NoteViewComp(props) {

  const { title, note, category, updatedAt, id, } = props

  const [modalState, setModalState] = useState(false)

  const [showAction, setshowAction] = useState(false);
  const actionRef = useRef();


  useEffect(() => {
    const outsideActionClick = (event) => {
      if (!actionRef?.current?.contains(event.target)) {
        setshowAction(false)
      }
    }
    document.addEventListener("mousedown", outsideActionClick);
  }, [actionRef])




  return (
    <div className=" h-fit bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 p-[1px] rounded-lg">


      {modalState && <Modal modalState={modalState} setModalState={setModalState} ><ViewNoteComp noteId={id} setModalState={setModalState} /></Modal>}
      <div
        onClick={() => setModalState(true)}
        className=" rounded-lg bg-white">
        {/* title */}
        <div className="flex items-center justify-between p-2 md:p-3">

          <h3 className="font-erode font-semibold italic line-clamp-1">{title}</h3>

          <h3 className="font-erode font-semibold italic text-gray-600 border-l border-l-slate-500 pl-2">cat:<span className="ml-2">{category}</span></h3>
        </div>

        <div className="p-2 border-y border-y-slate-400 h-20">
          <p className="font-recia font-light text-sm md:text-base line-clamp-3">{note}</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <p className="font-erode font-normal italic text-xs md:text-sm text-slate-300">{moment(updatedAt).fromNow()}</p>
          {/* <div
            ref={actionRef}
            className=" flex flex-col relative w-fit">
            <div
              onClick={() => setshowAction(!showAction)}
              className=" flex items-center gap-x-2 text-slate-300 ">
              <IconMoreVerticalAlt />
              <h4 className="font-erode">Action</h4>
            </div>
            {showAction && (<div className="absolute bottom-full bg-white w-full">
              <p
                onClick={handleViewModal}
                className="border-b border-b-indigo-400 font-erode font-medium w-full">View</p>
              <p className="border-b border-b-indigo-400 font-erode font-medium w-full">Edit</p>
              <p className="border-b border-b-indigo-400 font-erode font-medium w-full">Delete</p>
            </div>)}
          </div> */}

        </div>
      </div>
    </div>
  )
}
