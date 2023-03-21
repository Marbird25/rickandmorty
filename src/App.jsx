import axios from 'axios'
import './App.css'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import { useEffect, useState } from 'react'

function App() {

  const[locationById, setLocationById] = useState({})
  
  useEffect ( () => {

    let location = Math.floor(Math.random()* 126) + 1

      axios
      .get(`https://rickandmortyapi.com/api/location/${location}`)
      .then ( (resp)  => setLocationById(resp.data))
      .catch ( error => console.error(error))

  }, [])
 
  // console.log(locationById.residents)

  const [searchloc, setsearchloc] = useState("")

  const search =() => {

    if(searchloc <=126){
      axios
      .get(`https://rickandmortyapi.com/api/location/${searchloc}`)
      .then ( (resp)  => setLocationById(resp.data))
      .catch ( error => console.error(error))
      setsearchloc("")

    } else{
      alert("Entrada no valida")
    }
    
  }

  return (
    <div className="App">
      <div className='navbar'>
      <input type="text" value={searchloc} onChange={(e) => setsearchloc(e.target.value)} placeholder={"Ingrese Id"} />
      <button  className='button' onClick={search}>Find</button>
      <Location data = {locationById}/>
      </div>
      
      <div className="grid">
      {locationById.residents?.map((data) => (
        <ResidentInfo  url={data} key={data} />
      ))}
      </div>
    </div>
  )
}

export default App
