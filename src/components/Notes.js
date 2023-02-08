import React, { useContext, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

function Notes() {
  const history = useHistory();
  /** check condition if user not login */
  if (! localStorage.getItem('token')) {
       history.push('/login')
  } 
  const context = useContext(NoteContext);
  const { notes, getNoteEvent } = context;
   useEffect(() => {
     getNoteEvent();
     console.log('use Effect Note event');
    // eslint-disable-next-line
   }, [])
  
    const ref = useRef(null)   
    const refclose = useRef(null)   
    const { updateNoteEvent } = context;
    const [Addnoteinit, setAddnoteinit] = useState({ id:"", etitle: "", edescription: "", etag: "" })
  
    const updateNote = (currentNote) => {
      ref.current.click();  
      setAddnoteinit({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }
  const handleClick = () => {
    updateNoteEvent(Addnoteinit.id, Addnoteinit.etitle, Addnoteinit.edescription, Addnoteinit.etag) // updated value pass to this function
    //  setAddnoteinit({title: "", description: "", tag: ""})
    refclose.current.click();
  }
  const onChange = (e) => {   
      setAddnoteinit({ ...Addnoteinit, [e.target.name]: e.target.value })  // spareate operater use to retain and add note value to Addnoteinit to 
  }   

  return (
       <>
  
      <Addnote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">                       
            <form className='my-3'>
              <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" name="etitle" aria-describedby="titleHelp" placeholder="Enter title" value={Addnoteinit.etitle} onChange={onChange}/>
              </div>
              <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input type="text" className="form-control" id="description" name="edescription" value={Addnoteinit.edescription} onChange={onChange} />
              </div>
              <div className="form-group">
              <label htmlFor="tag">Tag</label>
              <input type="text" className="form-control my-3" id="tag" value={Addnoteinit.etag} name="etag" onChange={onChange} />
              </div>
              {/* <button type="submit" className="btn btn-primary"  onClick={handleClick}>Submit</button> */}
            </form>
            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary"  onClick={handleClick}>Update</button>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
          <div className="row my-3">
            <h3> Your Notes</h3>
            {
              console.log(notes)}
              {console.log('qqqqqqqqqqqq')        
            }
            <div className="container mx-2"> 
                    {notes.length===0 && 'No notes to display'}
            </div>
            {notes.map((note) => {
              return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
            })} 
            </div>
        </div>
    </>
  );
}

export default Notes;
