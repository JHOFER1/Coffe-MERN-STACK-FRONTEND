import {CardCourses} from './cardCourses';
import axios from 'axios';
import React, { useState, useEffect} from 'react';
export const Courses=()=> {
const [responseData, setResponseData] = useState('');
useEffect(() => {
async function getData() {
      const responseTopics = await axios.get('/topics');
      setResponseData(responseTopics.data);
    }
  getData();
},[]);
const topics=responseData;

// const arrayData = Object.values(responseData);
return(
 <div className="mainContainerCourses">
    {topics? topics.map( topic=>
    <CardCourses topicRango={topic.rango} topicName={topic.topic} id={topic._id} language={topic.language}/> 
    ):null}
</div> 
);
}

export default Courses;