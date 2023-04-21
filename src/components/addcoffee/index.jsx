// Exportamos 
import imgcoffee from '../../assets/coffee.png'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';


// funcion add
function Addcoffe() {
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
  const history=useHistory();

  async function handleSubmit(event) {
    history.push('/')
    event.preventDefault();
    const responseAdd = await axios.post('/topics/add', {
      topic,
      rango,
      language
    });
    if(responseAdd.data){
      history.push('/profile')
      console.log('Succes')      
    }else{ 
      history.push('Error');
    }
    // const data=response.data;
    // Process response of API
  }
  return (
    <div className="apadd">
      <div className='menu-add' ref={menuRef}>
        <div className='menu-trigger-add' >
          <button onClick={() => { setOpen(!open) }} className='add'>Add Coffee</button>
        </div>
        <div className={`dropdown-menu-add ${open ? 'active' : 'inactive'}`}>
          <h2>
            <img src={imgcoffee} alt="IMAGENLOGO" />
            <br/>
            Add a new<br/>
            Coffee</h2>
            {/* FORMULARIO */}
          <form onSubmit={handleSubmit}>
            
            <h3 >Topic</h3>
            <input
              type="text"
              value={topic}
              placeholder="Topic"
              name="topic"
              onChange={event => setTopic(event.target.value)}
               />

            <h3 >Range</h3>
            
            <input
              type="text"
              placeholder="Rango"
              name="Rango"
              value={rango}
              onChange={event => setrango(event.target.value)}
              />
            
            <h3 >Language</h3>
            <input
              type="language"
              placeholder="language"
              name="language" 
              value={language} 
              onChange={event => setlanguage(event.target.value)}
              />
            
            <div className='menu-trigger-add' onClick={() => { setOpen(!open) }}>
            <button type='submit'>
              Save
            </button>
            </div>
            
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Addcoffe;