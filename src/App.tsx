import './App.css'
import { Footer } from './Components/footer/footer'
import { MainBody } from './Components/mainBody/mainBody'
import { NavBar } from './Components/navBar/navBar'

function App() {

  return (
    <div className='root-div'>
    <NavBar/>
    <MainBody/>
    <Footer/>
    </div>
  )
}

export default App
