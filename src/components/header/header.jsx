import React from 'react'
import classes from './header.module.css'
import Burger from '../burger/burger'

const Header = () => {
  return (
    <div className={classes.header_container}>
        <Burger/>
        <div className={classes.header_navigation}>
        <p className={classes.information}>Let's start dear Singer!</p>
        
        
        </div>
        <hr className={classes.header_line}/>
    </div>
  )
}

export default Header