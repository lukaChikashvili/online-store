import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"


function App() {


  return (
    <>

     <NavBar />

     <main className="py-3">
       <Outlet />
     </main>
    </>
  )
}

export default App
