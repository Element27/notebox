

export default function ViewNoteComp({ id }) {
  return (

    <div className="h-fit w-full  mx-auto mt-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4">
      <div className="flex items-center space-x-4 justify-between">
        <div className="flex flex-col mb-2 w-2/3">
          <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
            Title
          </label>
          <input type="text" name="title" className="p-2 md:p-3 rounded-md " min={2} />
        </div>

        <div className="flex flex-col mb-2 w-1/3">
          <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
            Category
          </label>
          <select className="p-2 md:p-3 rounded-md font-erode font-semibold text-sm md:text-base" >
            <option className="font-erode font-medium text-xs md:text-sm">Work</option>
            <option className="font-erode font-medium text-xs md:text-sm">Leisure</option>
            <option className="font-erode font-medium text-xs md:text-sm">Others</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="note" className="font-erode font-semibold text-sm md:text-base">
          Note
        </label>
        <textarea name="note" className="p-2 md:p-3 h-14 md:h-16  rounded-md resize-none" min={3} required></textarea>
      </div>
      {/* <div className="flex items-center justify-between mt-4">
        <button className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Add</button>
        <button
          onClick={() => setAddNoteState(false)}
          className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</button>
      </div> */}
    </div>

  )
}
