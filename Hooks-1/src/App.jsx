import { useContext,useState} from 'react'
import './App.css'
import  Counter1 from './Components/useState/Counter1'
import Counter2 from './Components/useState/Counter2'
import Counter3 from './Components/useState/Counter3'
import Counter4 from './Components/useState/Counter4'
import Effect from './Components/useEffect/Effect'
import ParentContext, { AppContext } from './Components/useContext/parentContext'
import Toggle from './Components/toggle/Toggle'

function App() {
  const [show , setShow] = useState(false)

  const {isDark,setisDark} = useContext(AppContext) 
  return (
    <>
    <button onClick={()=>{setShow(!show)}}>C H A N G E </button>

    <button onClick={()=>{setisDark(!isDark)}}>{isDark ? "LIGHT THEME" : "DARK  THEME"}</button>

    {show ? (
    <>
     <Counter1 />
     <Counter2 />
     <Counter3 />
     <Counter4 />
     </> )
     : (
      <>
     <Effect /> 
     <ParentContext />
     <Toggle />
     </>)}
    </>
  )
}

export default App