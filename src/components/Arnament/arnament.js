import React from 'react'
import image1 from '..//../assets/images/pexels-zumrad-normatova-16456065.jpg'
import classes from './arnament.module.css'
const arnament = () => {
  return (
    <div className={classes.arnament_wrapper}>
         <div className={classes.main_photo}>
    
        
    <div className={classes.hexagon}>
  <div className={classes.hexagon_inner}>
    <img src={image1} alt="Some Image"/>
  </div>
</div>
<div className={classes.hexagon}>
  <div className={classes.hexagon_inner}>
    <img src={image1} alt="Some Image"/>
  </div>
</div>
<div className={classes.hexagon}>
  <div className={classes.hexagon_inner}>
    <img src={image1} alt="Some Image"/>
  </div>
</div>
      
    </div>
    <div className={classes.main_photo2}>
    <div className={classes.hexagon}>
  <div className={classes.hexagon_inner}>
    <img src={image1} alt="Some Image"/>
  </div>
</div>
<div className={classes.hexagon}>
  <div className={classes.hexagon_inner}>
    <img src={image1} alt="Some Image"/>
  </div>
</div>
    </div>
    <div className={classes.main_photo3}>
    <div className={classes.hexagon}>
  <div className={classes.hexagon_inner}>
    <img src={image1} alt="Some Image"/>
  </div>
</div>
    </div>
    </div>
  )
}

export default arnament