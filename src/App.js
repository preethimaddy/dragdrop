import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Bin from './components/Bin'
import Note from './components/Note'
function App() {

  const[notes, setNotes] = useState([]);
  const[binnedItems, setBinnedItems] = useState([])

  useEffect (()=> {
    const initialNotes = [
      { id: 1, text: "Note 1" },
      { id: 2, text: "Note 2" },
      { id: 3, text: "Note 3" },
    ];
    
    localStorage.setItem("noteslist", JSON.stringify(initialNotes));

    let  array =localStorage.getItem("noteslist")
    setNotes(JSON.parse(array))
  }, [])


  // Initialize binned items
  useEffect(() => {
    let array = localStorage.getItem("binnedItems");
    if (array) {
      const parsedItems = JSON.parse(array) || [];
      setBinnedItems(parsedItems);
    }
  }, []);
  console.log(notes);
  console.log("binnedItems:", binnedItems);
  return (
    <div className="App">
 <>
 <DndProvider backend ={HTML5Backend}>
 <h1 className='text-center text-3xl text-semibold mt-4 py-2'>Drag and Drop</h1>
 {notes.map ((note)=>
  
  <Note 
  key={note.id} // Use a stable and unique key
  note={note} // Pass the full item object to the Note component
  binnedItems={binnedItems}
  setNotes={setNotes} // Pass setNotes correctly
/>
 )}
 <Bin  binnedItems={binnedItems}/>
 
 </DndProvider>
 
 </>
    </div>
  );
}

export default App;
