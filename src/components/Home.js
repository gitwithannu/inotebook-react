import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeSlider from './HomeSlider';
import Notes from './Notes';
import NoteBannerState from '../context/notes/NoteBannerState';
import DiscoverTheJoy from './DiscoverTheJoy';
import PersonalizedNotebooks from './PersonalizedNotebooks';
function Home() {
  const history = useHistory();     

  return (
    <>
        <NoteBannerState>
        <HomeSlider />
        <DiscoverTheJoy />
        <PersonalizedNotebooks/>
        </NoteBannerState>
  </>
  
  ) 
}
export default Home