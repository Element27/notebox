import { useEffect, useState } from "react"
import Header from "../components/layout/Header";
import ViewNoteCard from "../components/ViewNoteCard";

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

      <div className="flex items-center justify-between">
        {/* search by tag */}
        <div className="gradient-bg p-[1px]">
          <div className="bg-white">
            <select onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base mr-4">
              <option value="" className="font-erode font-medium text-xs md:text-sm">Select category</option>
              <option value='Work' className="font-erode font-medium text-xs md:text-sm">Work</option>
              <option value='Class' className="font-erode font-medium text-xs md:text-sm">Class</option>
              <option value='Study' className="font-erode font-medium text-xs md:text-sm">Study</option>
              <option value='Leisure' className="font-erode font-medium text-xs md:text-sm">Leisure</option>
              <option value='Others' className="font-erode font-medium text-xs md:text-sm">Others</option>

            </select>
            {/* on small screen replace texts with icon  */}
            <button className="font-erode px-8 py-2 border border-indigo-400 rounded-md text-xs md:text-sm lg:text-base" onClick={handleFilter}>filter</button>
          </div>
        </div>
        {/* sort be created/updated date */}
        <div>
          {/* <select
            onChange={(e) => setLatest(e.target.value)}
            value={latest}
            className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base mr-4" disabled
          >
            <option
              className="font-erode font-medium text-xs md:text-sm"
              value={true}>latest</option>
            <option
              className="font-erode font-medium text-xs md:text-sm"
              value={false}>earliest</option>
          </select> */}
          <button onClick={showLatest}>
            Show <span>{latest ? "recent" : "older"}</span>
          </button>
        </div>
      </div>
      <div className=" px-2 py-4 md:px-4 w-full md:w-10/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">

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
