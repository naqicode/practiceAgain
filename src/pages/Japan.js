import React from 'react'
import japan1 from './japan1.jpg';
import japan2 from './japan2.jpg';
import japan3 from './japan3.jpg';
import japan4 from './japan4.jpg';

const Japan = () => {
  return (
    <div>
      <h1>Sexy Japan Image Gallery <span>for you to enjoy</span></h1>

      <div>
        <img src={japan1} alt=''/>
        <img src={japan2} alt=''/>
        <img src={japan3} alt=''/>
        <img src={japan4} alt=''/>

      </div>
      
    </div>
  )
}

export default Japan;

