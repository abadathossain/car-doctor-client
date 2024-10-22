
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'

export default function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
    </div>
  )
}
