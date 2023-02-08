import React, {  useState } from 'react'
import NoteContext from './NoteContext'
function NoteState(props) {
  const backhost = "http://localhost:5000";
  const [notes, setnotes] = useState([]);

  //  get all note function
  const getNoteEvent = async() => {
    // API Call
    const response = await fetch(`${backhost}/api/notes/fetchallnotes`, {
     method: 'GET', // *GET, POST, PUT, DELETE, etc.
     headers: {
       'Content-Type': 'application/json',
       'auth-token': localStorage.getItem('token')
     },
   });
    const json = await response.json();
   //  console.log(json); 
   setnotes(json); 
 }

  //  Add note function
  const addNoteEvent = async(title, description, tag = "personal") => {
     // API Call
     const response = await fetch(`${backhost}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
     body: JSON.stringify({title, description, tag})
    });
    console.log('Added new notes. ');
    const note = await response.json();
    setnotes(notes.concat(note));
  }

  // Delelete note funciton 
  const deleteNoteEvent = async(id) => {

         // API Call
         const response = await fetch(`${backhost}/api/notes/deletenote/${id}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
         });
        const json = await response.json();
        if (json.success) {
          let newnode = notes.filter((note) => {
            return note._id !== id
          })
          setnotes(newnode);
        } else {
          console.log(json.error);
        }
  }

  // Update note function 
  const updateNoteEvent = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${backhost}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title, description})
    });
    const json = response.json();
    if (json.success) {
      let newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title
          newNotes[index].Description = description
          newNotes[index].tag = tag
          break;
        }
      }
      setnotes(newNotes);
    } else {
      console.log(json);
    }
  }


  return (
    <>
      {console.log(notes) }
      {console.log(' check this position value')}
    <NoteContext.Provider value={{ notes, addNoteEvent, deleteNoteEvent, updateNoteEvent, getNoteEvent }} >
      {props.children}
      </NoteContext.Provider>
      </>
  )
}

export default NoteState