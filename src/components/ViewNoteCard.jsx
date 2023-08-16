/* eslint-disable react/prop-types */
import moment from "moment/moment";
import { Link } from "react-router-dom";


export default function ViewNoteCard(props) {

  const { title, note, category, updatedAt, id, } = props

  // console.log(category)

  const renderCategories = category.map((item) => {
    return <span className="ml-2" key={item.value}>{item.value}</span>
  })

  return (
    <Link to={`/note/${id}`}>
      <div className=" h-fit bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 p-[1px] rounded-lg">


        <div
          className=" rounded-lg bg-white">
          {/* title */}
          <div className="flex flex-col justify-between p-2 md:p-3">

            <h3 className="font-erode font-semibold italic line-clamp-1">title: {title}</h3>
          </div>

          <div className="p-2 border-y border-y-slate-400 h-20">
            <p className="font-recia font-light text-sm md:text-base line-clamp-3">{note}</p>
          </div>

          <div className="flex items-center justify-between p-2">
            <p className="font-erode font-normal italic text-xs md:text-sm text-slate-300 w-2/5">{moment(updatedAt).fromNow()}</p>
            <p className="font-erode font-normal italic text-xs md:text-sm text-slate-300 line-clamp-1 w-3/5">categories:{renderCategories}</p>

          </div>
        </div>
      </div>
    </Link>
  )
}
