import './App.css'
import { Footer } from './Components/footer/footer'
import { NavBar } from './Components/navBar/navBar'

function App() {

  return (
    <div className='root-div'>
    <NavBar/>
    <div className='mainbody h-[80vh]'>body</div>
    <Footer/>
    </div>
  )
}

export default App
