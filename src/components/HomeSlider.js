import React, { useContext, useState, useEffect, useRef } from "react";
 import BannerImage from '../theme images/BannerImages/banner-image.jpg' 
import NoteBannerContext from '../context/notes/NoteBannerContext'
import SliderItem from './SliderItem';
function HomeSlider() {
     const context = useContext(NoteBannerContext);
     const { banners, getBannerEvent } = context;
      useEffect(() => {
           getBannerEvent();
           console.log(' use effect');
       // eslint-disable-next-line
      }, [])
     
     return (
          <>
{/*                    <div>
                    <img src={ BannerImage}  className="d-block w-100" alt="... Banner image" />
                   </div> */}
               <div className="container mx-2"> 
                    {banners.length===0 && 'No notes to display'}
               </div>
               <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">               
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner">
                              {banners.map((banner, index) => (
                                   <div key={ index} className={`carousel-item  ${index ===0 ? "active" : "" }`} >
                                     <img  src={`../theme images/BannerImages/${banner.image}`} className="d-block w-100" alt="... Banner image"/>
                                   </div>
                              ))}
                              </div>
                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                         </button>
                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                         </button>
                    </div>             
               </div>
          </>
     )      
}
export default HomeSlider