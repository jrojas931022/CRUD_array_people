import { useState } from 'react'

import './App.css'
import { Person1 } from './components/Person1';
import { People1 } from './components/People1';

function App() {
  const [people1, setPeople1] = useState([
    {
       id: 1,
       name: "Inés Oliveros",
       role: "Backend Developer",
       img: "https://bootdey.com/img/Content/avatar/avatar8.png"
    },
    {
       id: 2,
       name: "Francisco Perez",
       role: "Designer",
       img: "https://bootdey.com/img/Content/avatar/avatar5.png"
    },
    {
       id: 3,
       name: "Natalia Zuliaga",
       role: "frontend",
       img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    }
 ]);
 

  return (
    <div>
    <People1
    people1={people1}
    setPeople1={setPeople1}
    />   
    <Person1 />   

    </div>
  )
}

export default App
