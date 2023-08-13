import AddNotesComp from "../addNotesComp";


export default function Modal({ setModalState, children }) {



  return (
    <>

      <div className="fixed top-0 right-0 w-screen h-screen">
        <div
          onClick={() => setModalState(false)}
          className="absolute h-screen w-screen bg-gray-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-8/12 lg:w-1/2">
          {children}
        </div>
      </div>
    </>
  )
}
