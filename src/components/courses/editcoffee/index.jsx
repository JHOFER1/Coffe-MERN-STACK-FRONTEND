// Exportamos 
import imgcoffee from '../../../assets/coffee.png'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// funcion register
export const Editcoffe = (props) => {
  //show button
  //Form View when clikk button signup
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });
  /// Add coffee
  const [topic, setTopic] = useState('');
  const [rango, setrango] = useState('');
  const [language, setlanguage] = useState('');
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.put(`topics/${props.id}`, {
      topic,
      rango,
      language
    });
    if (response.data) {
      window.location.reload()

    } else {
      history.push('/');
    }
    // const data=response.data;
    // Process response of API
  }
  return (
    <div className="apEdit">
      <div className='menu-edit' ref={menuRef}>
        <div className='menu-trigger-edit' >
          <text className='edit' onClick={() => { setOpen(!open) }}>Edit Coffee</text>

        </div>
        <div className={`dropdown-menu-edit ${open ? 'active' : 'inactive'}`}>
          <h3 className='welcomeedit'>
            <img className='coffee-img' src={imgcoffee} alt="IMAGENLOGO" />
            <br />
            Edit<br />
            Coffee</h3>
          {/* FORMULARIO */}
          <form className='formCorreoedit' onSubmit={handleSubmit}>

            <h3 className='correoedit'>Topic</h3>
            <input
              type="text"
              value={topic}
              placeholder={props.topicName}
              name="topic"
              onChange={event => setTopic(event.target.value)}
            />

            <h3 className='correoedit'>Range</h3>

            <input
              type="text"
              placeholder={props.Range}
              name="Rango"
              value={rango}
              onChange={event => setrango(event.target.value)}
            />

            <h3 className='correoedit'>Language</h3>
            <input
              type="language"
              placeholder={props.language}
              name="language"
              value={language}
              onChange={event => setlanguage(event.target.value)}
            />
            <div className='menu-trigger-edit' onClick={() => { setOpen(!open) }}>
              <button type='submit'>Save</button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Editcoffe;