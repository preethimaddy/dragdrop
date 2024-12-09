import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect, useState } from 'react';

function App() {

  const[notes, setNotes] = useState([]);
  const[bin, setBin] = useState([])

  useEffect (()=>{
    const initialNotes =["Note 1, Note 2, Note 3"];
    console.log(initialNotes.length);
    
    localStorage.setItem("noteslist", JSON.stringify(initialNotes));

    let  array =localStorage.getItem("noteslist")
    setNotes(JSON.parse(array))
  }, [])
  console.log(notes);
  
  return (
    <div className="App">
 <>
 <DndProvider backend ={HTML5Backend}>
 <h1 className='text-center text-3xl text-semibold mt-4 py-2'>Drag and Drop</h1>
 </DndProvider>
 
 </>
    </div>
  );
}

export default App;
