import { useEffect, useState } from "react"
import Header from "../components/layout/Header";
import ViewNoteCard from "../components/ViewNoteCard";

export default function Home() {
  const [allNotes, setAllNoted] = useState([])



  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("boxedNotes")) || [];
    // console.log(data)
    setAllNoted(data)
  }, [])


  return (
    <div className="relative">
      {/* Hero */}

      <Header />

      <div className="">
        {/* search by tag */}
        <div>
          <select>

          </select>
        </div>
        {/* sort be created/updated date */}
        <div></div>
      </div>
      <div className=" px-2 py-4 md:px-4 w-full md:w-10/12 mx-auto grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">

        {allNotes.length ? (allNotes.map((note) => {
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
