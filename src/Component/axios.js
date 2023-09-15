import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './axios.css'
const Axios = () => {
    const APIkey ='0d2ea96def32bdac2b508801674e02a7' 
    const [name,setName]=useState('')
    const [values,setValues]=useState('')
    const [cityname,setCityname]=useState('')
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`)
        .then((response)=>setValues(response.data))
        .catch((err)=>{console.log(err);})
    },[cityname])
   console.log(values);
   function handleclick(){
    setCityname(name)
   }
   
 
  
    const [time,setTime]=useState(new Date());
  
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=>clearInterval(interval);
  },[])
  return (
    <>
     <h1 className='heading'>Weather</h1> 
     <h1 className='city_name'>City Name: {cityname}</h1>
     <div className='form'>
      <div className='time'>
        <div className='form_box'>
        <label className='label'>City Name</label>
     <input type='text' placeholder='Enter Your City Name' onChange={(e)=>setName(e.target.value)}/>
        </div>
     
      <h1 className='time_data'>Time:{time.toLocaleTimeString()}</h1>
      </div>
     <button onClick={handleclick}>Search</button>
     </div>
     <div className='output'>

    
     <h3>City Name: {values && values.name}</h3>
     <h3>City Temp: {values && values.main.temp-273} deg</h3>
     <h3>Min-Temp: {values && values.main.temp_min-273} deg</h3>
     <h3>Max-Temp: {values && values.main.temp_max-273} deg</h3>
     <h3>Wind-Speed: {values && values.wind.speed}km/h</h3>
     <h3>Humidity :{values && values.main.humidity}%</h3>
     </div>
    </>
  )
}

export default Axios
