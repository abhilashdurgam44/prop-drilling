
import './App.css'
import ChildA from './components/ChildA'

function App() {
  
   const name="Yoshitha"
   const gender="female"
  return (
    <>
         <ChildA name={name} gender={gender}/>
    </>
  )
}

export default App
