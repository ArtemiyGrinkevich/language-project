// import React from 'react'
// import classes from './main.module.css'
// import MyButton from '../myButton/myButton';
// import Header from '../header/header';
// import image1 from '..//../assets/images/pexels-zumrad-normatova-16456065.jpg'
// import imageTrain from '..//../assets/images/pngwing.com.png'
// import imageLanguage from '..//../assets/images/languages.png'
// const Main = () => {
//   return (
//     <div className={classes.main_wrapper}>
//       <Header/>
      
      
//       <div className={classes.main_container}>
//       <img className={classes.main_train} src={imageTrain} alt="Train Image"/>
//       <img className={classes.main_language} src={imageLanguage} alt="language Image"/>

//     <ul className={classes.main_content}>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
//       <li><h2 style={{color:'rgba(0, 98, 255, 0.744)'}}>Hello</h2><p style={{color:'rgba(0, 203, 0, 0.403)'}}>Привет</p></li>
//       <hr/>
      
//     </ul>

//       </div>
     
      
    
//     </div>
//   )
// }

// export default Main
import React, { useState } from 'react';
import classes from './main.module.css';
import MyButton from '../myButton/myButton';
import Header from '../header/header';
import image1 from '../../assets/images/pexels-zumrad-normatova-16456065.jpg';
import imageTrain from '../../assets/images/pngwing.com.png';
import imageLanguage from '../../assets/images/languages.png';

const Main = () => {
  const [checkboxes, setCheckboxes] = useState(Array(10).fill(false)); // Создаем массив чекбоксов и инициализируем их состояние как false

  // Функция для обработки изменения состояния чекбокса
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes]; // Создаем копию массива чекбоксов
    updatedCheckboxes[index] = !updatedCheckboxes[index]; // Инвертируем состояние чекбокса по индексу
    setCheckboxes(updatedCheckboxes); // Обновляем состояние чекбоксов
  };

  return (
    <div className={classes.main_wrapper}>
      <Header />
      <hr style={{ color: 'blue', maxWidth: '300px' }} />

      <div className={classes.main_container}>
        <img className={classes.main_train} src={imageTrain} alt="Train Image" />
        <img className={classes.main_language} src={imageLanguage} alt="language Image" />

        <ul className={classes.main_content}>
          {checkboxes.map((isChecked, index) => (
            <li style={{minWidth:'100%',display:'flex',justifyContent:'space-around',flexDirection:'column'}} key={index}>
              <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',alignContent:'center'}}>
              <div >
              <h2 style={{ color: 'rgba(0, 98, 255, 0.744)' }}>Hello</h2>
              <p style={{ color: 'rgba(0, 203, 0, 0.403)' }}>Привет</p>
              
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              
            
              </div>
              <hr style={{width:'70%',background:'rgba(0, 98, 255, 0.564)',padding: '0 10px', height: '1px', border: 'none'}}/>
              </li>
            
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default Main;
