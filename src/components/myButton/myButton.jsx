
// import {motion} from 'framer-motion'
import React, { useState} from 'react';
import classes from './myButton.module.css';
import {  BsArrowUpRight } from 'react-icons/bs';


const MyButton = ({ onClick, style, children }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
    
      className={classes.button}
      onClick={onClick}
      style={{
        ...style,
        '--icon-rotation': isHovered ? '45deg' : '0deg',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={classes.icon}><BsArrowUpRight/></span> {children}
    </button>
  );
};

export default MyButton;

// export const MButton = motion(MyButton)