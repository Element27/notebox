
import { Link, useLocation } from 'react-router-dom'
import { IconAddOutline, IconBoxArchive, IconHome } from '../IconComponent';

export default function Header() {

  const location = useLocation();

  return (
    <div className="bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400 w-full p-4 md:py-4 md:px-8">
      <div className=" w-full  flex items-center justify-between">
        <div className='flex items-center justify-between gap-x-4'>
          {/* logo */}
          <h1 className="font-erode font-bold text-3xl lg:text-5xl w-fit sm-hide">NoteBox</h1>
          <IconBoxArchive className="text-3xl lg:text-4xl" />
        </div>
        <div className=" p-[1px] rounded-md">
          {location.pathname !== '/' ? (
            <div className='flex space-x-2 md:space-x-3 lg:space-x-4'>

              <Link to='/'>
                <div className='gradient-bg p-[1px] rounded-md'>
                  <div className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md  ">
                    <p className='font-erode font-semibold text-based md:text-xl flex items-center gap-x-2'>
                      <IconHome className="text-based md:text-xl" />
                      <span className='sm-hide'>Home</span></p>
                  </div>
                </div>
              </Link>

              <Link to='/add-note'>
                <div className='gradient-bg p-[1px] rounded-md'>
                  <div className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md">
                    <p className="font-erode font-semibold text-based md:text-xl flex items-center gap-x-2">
                      <IconAddOutline />
                      <span className='sm-hide'> New Note</span></p>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className='gradient-bg p-[1px] rounded-md'>
              <Link to='/add-note'>
                <div className='gradient-bg p-[1px] rounded-md'>
                  <div className="flex gap-x-2 items-center bg-purple-300 p-2 rounded-md">
                    <p className="font-erode font-semibold text-based md:text-xl flex items-center gap-x-2">
                      <IconAddOutline />
                      <span className='sm-hide'> New Note</span></p>
                  </div>
                </div>
              </Link>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}
