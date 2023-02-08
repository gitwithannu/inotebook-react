import React, {  useState } from 'react'
import NoteBannerContext from "./NoteBannerContext";
  function BannerState(props) {
    const backhost = "http://localhost:5000";
    const [banners, setbanners] = useState([]);
    
    //  get all Banner function
    const getBannerEvent = async() => {
      // API Call
      const response = await fetch(`${backhost}/api/banners/fetchallbanners`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
         'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log(banners);
      console.log('we are testing ');
      console.log(json); 
      setbanners(json); 
    }
    return (
          <NoteBannerContext.Provider value={{ banners, getBannerEvent }} >
            {props.children}
          </NoteBannerContext.Provider>
        )
  }


export default BannerState;