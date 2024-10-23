
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Shared/NavBar/NavBar'
import Footer from '../pages/Shared/Footer/Footer'


export default function Main() {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}
