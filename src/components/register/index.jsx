// Exportamos 
import imgcoffee from '../../assets/coffee.png'
// import './index.scss';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useIsLoggedIn } from '../../const/auth';
// ------------TOASTTIFY---------------------------//
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// funcion register
function Register() {
  const us = useIsLoggedIn();
  const [showButton, setShowButton] = useState(us);


  //Form View when clikk button signup
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    setShowButton(us);
  }, [us])

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
  /// Sign up
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post('/signup', {
      username,
      password,
      email,
      age
    });
    if (response.data === 'Register Success') {
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
      history.push('/');
    }
  }
  const handleClick = () => {
    axios.get('/logout');
    window.location.replace('/');
  };

  return (
    <div className="apRegister">
      <div>
        <ToastContainer />
      </div>
      <div className='menu-register' ref={menuRef}>
        <div className='menu-trigger-register' >
          {showButton ? <button className='register' onClick={handleClick}>Logout</button>
            : <button onClick={() => { setOpen(!open) }} className='register'>Sign up</button>}
        </div>
        <div className={`dropdown-menu-register ${open ? 'active' : 'inactive'}`}>
          <h3 className='welcomeRegister'>
            <img className='coffee-img' src={imgcoffee} alt="IMAGENLOGO" />
            <br />
            Welcome to<br />
            Coffee</h3>
          {/* FORMULARIO */}
          <form className='formCorreoRegister' onSubmit={handleSubmit}>

            <h3 className='correoRegister'>Email</h3>
            <input
              type="text"
              value={email}
              placeholder="email"
              name="email"
              onChange={event => setEmail(event.target.value)}
            />

            <h3 className='correoRegister'>Username</h3>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />

            <h3 className='correoRegister'>Password</h3>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            <h3 className='correoRegister'>Age</h3>
            <input
              type="num"
              placeholder="Age"
              name="age"
              value={age}
              onChange={event => setAge(event.target.value)}
            />
            <div className='menu-trigger-register' onClick={() => { setOpen(!open) }}>
              <button type='submit'>Signup</button>
            </div>
          </form>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Register;
