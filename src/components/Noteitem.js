import React, {useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
function Noteitem(props) {
    const context = useContext(NoteContext);
    const { deleteNoteEvent } = context;
  const { note, updateNote } = props;
     return (
       
          <div className='col-md-3'>
              <div className="card my-3">
               <div className="card-body">
                    <h5 className="card-title">  {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                      <i className="fa-solid fa-trash-can mx-2 " onClick={ ()=>{ deleteNoteEvent(note._id)} }></i>
                       <i className="far fa-edit mx-2 " onClick={ () =>{ updateNote(note) }}></i>
             {/*   <a href="#" className="btn btn-primary">Go somewhere</a> */}
               </div>
           </div>
       </div>
  )
}

export default Noteitem