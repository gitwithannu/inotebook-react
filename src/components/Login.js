import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

function Login() {
     const backhost = "http://localhost:5000";
     let history = useHistory();
     const [credential, setcredential] = useState({email:"", password:""})
     const onSubmit = async (e) => {
          e.preventDefault();
             // API Call
          const response = await fetch(`${backhost}/api/auth/login`, {
               method: 'POST', // *GET, POST, PUT, DELETE, etc.
               headers: {
                'Content-Type': 'application/json',             
               },
               body: JSON.stringify({email:credential.email, password:credential.password})
          });
          const json = await response.json();
            
           try {
                if (json.success) {
                     localStorage.setItem('token', json.authToken)
                     history.push('/') // redirect 
                }
                else {
                     alert('wrong credential');
                }
           } catch (error) {
               
           }
     }
     const onChange = (e) => {
/*           console.log(e.target.name);
          console.log(e.target.value); */
          setcredential({ ...credential, [e.target.name]: e.target.value })
     }

  return (
     <div className='container my-2'>
          <h2>Login </h2>
          <form onSubmit={onSubmit}>
               <div className="mb-3">
               <label htmlFor="" className="form-label">Email address</label>
               <input type="email" name="email" className="form-control" id="email" onChange={onChange} />
               </div>
               <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input type="password"  name="password" className="form-control" id="password" onChange={onChange}/>
               </div>
               <button type="submit" className="btn btn-primary">Submit</button>
          </form>
     </div>
  )
}

export default Login