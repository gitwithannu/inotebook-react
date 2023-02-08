import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

function Addnote() {
     const context = useContext(NoteContext)
     const { addNoteEvent } = context;
      const [Addnoteinit, setAddnoteinit] = useState({ title : "", description : "", tag : ""})

     const handleClick = (e) => {
          e.preventDefault();
          console.log(Addnoteinit);
          addNoteEvent(Addnoteinit.title, Addnoteinit.description, Addnoteinit.tag) // updated value pass to this function
        //  setAddnoteinit({title: "", description: "", tag: ""})
     }
     const onChange = (e) => {  
          setAddnoteinit({ ...Addnoteinit, [e.target.name]: e.target.value })  // spareate operater use to retain and add note value to Addnoteinit to 
     }
  return (
     <div className="container my-3">
          <h2> Add A Note</h2>
          <form className='my-3'>
          <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="titleHelp" placeholder="Enter title" onChange={onChange}/>
          </div>
          <div className="form-group">
          <label htmlFor="Description">Description</label>
          <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
          </div>
          <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input type="text" className="form-control my-3" id="tag" name="tag" onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary"  onClick={handleClick}>Submit</button>
          </form>
     </div>
  )
}

export default Addnote