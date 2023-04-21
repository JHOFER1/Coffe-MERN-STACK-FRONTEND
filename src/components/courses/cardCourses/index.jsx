import edit from '../img/edit.png';
import logout from '../img/log-out.png';
import React, { useState, useEffect, useRef } from 'react';
import { DropdownItem } from '../DropdownItem';
import Editcoffe from '../editcoffee';

export const CardCourses = (props) => {
  const [opencard, setopencard] = useState(false); //Inicializamos una variable de estado en false
  let menuRef = useRef();//

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setopencard(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });
  const deleteId =props.id;


  return (
    <>
      <div className="courserContainer">
        <h1>{props.topicName}</h1>
        <img className='imagenCourses' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwHGcKYqvBVG0u5WT2aYpbKBaxnIw2pvuWA&usqp=CAU' alt="Cursos" />
        <h3 className='h3Courser'>{props.topicRango}
        </h3>
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={() => { setopencard(!opencard) }}>
            <button className='buttonCourser'>Options</button>
          </div>
          <div className={`dropdown-menu ${opencard ? 'active' : 'inactive'}`}>
            {/* <h3 className='h3Courser'>Menu<br/><span> Descripcion</span></h3> */}
            <ul className='ulDropdown'>
              <DropdownItem img={logout} text={"Delete Coffee"} url={deleteId} />
              <li className='dropdownItem' >
                <img src={edit} alt='none'></img>
                <Editcoffe topicName={props.topicName} Range={props.topicRango} language={props.language} id={props.id} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};