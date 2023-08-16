import { useEffect, useState } from "react"
import Header from "../components/layout/Header";
import ViewNoteCard from "../components/ViewNoteCard";
import { IconFilter, IconSortCalendarAscending, IconSortCalendarDescending } from "../components/IconComponent";

export default function Home() {
  const [allNotes, setAllNoted] = useState([])
  const [renderNotes, setRender] = useState([])
  const [filter, setFilter] = useState("")
  const [latest, setLatest] = useState(true)


  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("boxedNotes")) || [];
    // console.log(data)
    const data = sortFunc([...res])
    setAllNoted(data)
    setRender(data)
  }, [])

  const handleFilter = (e) => {
    setFilter(e.target.value)

    if (filter !== "") {
      const filteredNotes = sortFunc(
        allNotes.filter((item) => {
          return (item.category.some(cate => cate.value === filter))
          // return item.category.includes(filter)
        }))

      setRender(filteredNotes)
      // setFilter("")
      console.log(filter)
    } else {
      setRender(allNotes)
    }
  }

  const sortFunc = (data) => {
    setLatest(!latest)
    console.log("here", latest)
    const sortedData = [...data].sort((a, b) => {
      if (latest) {
        return b.updatedAt - a.updatedAt
      } else {
        return a.updatedAt - b.updatedAt
      }
    })
    return (sortedData)

  }


  const showLatest = (e) => {
    setLatest(e.target.value)
    console.log("there", latest)
    // const sortedData = [...renderNotes].sort((a, b) => {
    //   if (latest) {
    //     return a.updatedAt - b.updatedAt
    //   } else {
    //     return b.updatedAt - a.updatedAt
    //   }
    // })
    setRender(sortFunc(renderNotes))

  }

  // console.log(latest)
  // console.log(filter)
  return (
    <div className="relative">
      {/* Hero */}

      <Header />

      <div className="flex items-center justify-between w-full my-4">
        {/* search by tag */}
        <div className="gradient-bg p-[1px] w-full">
          <div className="bg-white flex items-center justify-between w-full py-2 px-4 gap-x-4">
            <div className="flex items-center">
              <select onChange={(e) => setFilter(e.target.value)}
                value={filter}
                className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base mr-4">
                <option value="" className="font-erode font-medium text-xs md:text-sm">Add Tag</option>
                <option value='Work' className="font-erode font-medium text-xs md:text-sm">Work</option>
                <option value='Class' className="font-erode font-medium text-xs md:text-sm">Class</option>
                <option value='Study' className="font-erode font-medium text-xs md:text-sm">Study</option>
                <option value='Leisure' className="font-erode font-medium text-xs md:text-sm">Leisure</option>
                <option value='Others' className="font-erode font-medium text-xs md:text-sm">Others</option>

              </select>
              {/* on small screen replace texts with icon  */}
              <button className="font-erode px-6 lg:px-8 py-2 border border-indigo-400 rounded-md text-xs md:text-sm lg:text-base flex items-center gap-x-2" onClick={handleFilter}>
                <IconFilter className="text-xs md:text-sm lg:text-base" />
                <span className="sm-hide">filter</span>
              </button>

            </div>
            {/* sort be created/updated date */}
            <div>

              <button onClick={showLatest} className="bg-indigo-400 font-erode px-6 md:px-8 py-2 rounded-md text-xs md:text-sm lg:text-base flex items-center gap-x-2">
                <span className="sm-hide">{latest ? "recent" : "oldest"} First</span>
                <span className="md:hidden">{latest ? <IconSortCalendarAscending /> : <IconSortCalendarDescending />}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className=" px-4 py-4 md:px-6 w-full md:w-10/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">

        {renderNotes?.length ? (renderNotes?.map((note) => {
          {/* console.log(note) */ }
          return <ViewNoteCard
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
