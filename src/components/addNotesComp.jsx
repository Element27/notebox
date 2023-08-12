

export default function AddNotesComp() {
  return (
    <div className="h-fit w-10/12 md:w-8/12 lg:w-1/2 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4">
      <div className="flex flex-col mb-2">
        <label htmlFor="title" className="font-erode font-semibold text-sm md:text-base">
          Title
        </label>
        <input type="text" name="title" className="p-2 md:p-3 rounded-md " min={2} />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="note" className="font-erode font-semibold text-sm md:text-base">
          Note
        </label>
        <textarea name="note" className="p-2 md:p-3 h-14 md:h-16  rounded-md resize-none" min={3} required></textarea>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button className="font-erode px-8 py-2 bg-indigo-400 rounded-md">Add</button>
        <button className="font-erode px-8 py-2 border border-indigo-400 rounded-md">Cancel</button>
      </div>
    </div>
  )
}
