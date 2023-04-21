
import imgcoffee from '../../../../assets/coffee.png'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useIsLoggedIn } from '../../../../const/auth';
//-----------------------TOASTIFY-----------------------------------
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function Sigin
function Sign() {
  // show button
  const us = useIsLoggedIn();
  const [showButton, setShowButton] = useState(us);
  useEffect(() => {
    setShowButton(us);
  }, [us])

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

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post('/signin', {
      email,
      password,
    });
    if (response.data === 'Login Success') {
      // --------------------------FIREBASE---------------------
      const notify = () => toast.success(response.data, {
        theme: 'dark',
      });
      notify();
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);

    } else {
      const notify = () => toast.error(response.data, {
        theme: 'dark',
      });
      notify();
    }
    // const data=response.data;
    // Process response of API
  }




  return (
    <>
      <div>
      {/* <ToastContainer/> */}
      </div>
    <div className="Apsign">
      <div className='menu-sign' ref={menuRef}>
        <div className='menu-trigger-sign'>
          {/* <img src={user}></img> */}
          {showButton ? null : <button onClick={() => { setOpen(!open) }}> Sign in</button>}
        </div>
        <div className={`dropdown-menu-sign ${open ? 'active' : 'inactive'}`}>
          <h2>
            <img className='coffee-img' src={imgcoffee} alt="IMAGENLOGO" />
            <br />
            Te damos la bienvenida a <br />
            Coffee</h2>

          <form onSubmit={handleSubmit}>
            <h3>Correo Electronico</h3>
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={event => setemail(event.target.value)}
            />

            <h3 className='correo'>Contraseña</h3>

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            <a href='/resetPassword'>¿Olvidaste la contraseña?</a>
            <br />
            <button type='submit' onClick={() => { setOpen(!open) }}>Signin</button>
          </form>
        </div>

      </div>
    </div>
    </> );
}

export default Sign;
