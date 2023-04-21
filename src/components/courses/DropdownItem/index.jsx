
import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";

export const DropdownItem = (props) => {
  const history = useHistory();
  async function handleClick(event) {
    event.preventDefault();
    const responseAdd = await axios.delete(`topics/${props.url}`);
    if (responseAdd.data) {
      window.location.reload()
      console.log('Succes')
    } else {
      history.push('Error');
    }
    // const data=response.data;
    // Process response of API
  }



  return (
    <>
      <li className='dropdownItem'>
        <img src={props.img} alt='none'></img>
        <text onClick={handleClick}>
          {props.text}
        </text>
      </li>

    </>
  );
}