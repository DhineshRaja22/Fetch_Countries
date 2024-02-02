import './App.css';
import React, {  useEffect, useState } from 'react'
import FetchCountry from './Component/FetchCountry';
import axios from 'axios';

const App = () => {
  const [country,setCountry]=useState('India');
  const [error,setError]=useState(false);
  const [countryDetails,setCountryDetails]=useState([]);
  const [ckey,setckey]=useState('in');
  const apikey='3bLSyFdugCyYkJhakuPOLTT6crHejJeW5jyLyMZR';
useEffect(()=>{
  getCountryDetails();
},[])
    const getCountryDetails=async ()=>{
      const countryname=country;
      const api=`https://countryapi.io/api/name/${countryname}?apikey=${apikey}`
      try{
        const response=await axios.get(api);
        const details=response.data;
        console.log(details);
        setCountryDetails(details);
        console.log(Object.keys(details));
        setckey(Object.keys(details));
                setError(false);
      }
      catch(error){
          setError(true);

      }  
    }
    const handleSubmit=()=>{
      getCountryDetails();
    }

    



 
  return (
    <>
  <FetchCountry 
    country={country}
    setCountry={setCountry}
    handleSubmit={handleSubmit}
    error={error}
    setCountryDetails={setCountryDetails}
    countryDetails={countryDetails}
    ckey={ckey}
  />
    </>
    )
}

export default App