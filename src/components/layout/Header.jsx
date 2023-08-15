
import { Link, useLocation } from 'react-router-dom'

export default function Header() {



  const location = useLocation();




  return (
    <div className="bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 w-full p-4 md:py-4 md:px-8">
      <div className=" w-full  flex items-center justify-between">
        {/* logo */}
        <h1 className="font-erode font-bold text-3xl md:text-3xl lg:text-5xl hover:underline w-fit">NoteBox</h1>
        <div className=" p-[1px] rounded-md">
          {location.pathname !== '/' ? (
            <div className='flex space-x-2 md:space-x-3 lg:space-x-4'>
              <div className='gradient-bg p-[1px] rounded-md'>
                <Link to='/' className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md font-erode font-semibold ">Home</Link>
              </div>
              <div className='gradient-bg p-[1px] rounded-md'>
                <Link to='/add-note'
                  className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md">
                  <p className="font-erode font-semibold text-xl md:text-2xl lg:text-3xl">Add <span className=' hidden md:inline-block'> New Note</span></p> </Link>
              </div>
            </div>
          ) : (
            <div className='gradient-bg p-[1px] rounded-md'>
              <Link to='/add-note'
                className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md">
                <p className="font-erode font-semibold text-xl md:text-2xl lg:text-3xl">Add <span className=' hidden md:inline-block'> New Note</span></p> </Link>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}
