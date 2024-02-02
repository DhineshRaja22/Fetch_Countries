import React from 'react';

const FetchCountry = ({ country, setCountry, handleSubmit, error, countryDetails, setCountryDetails, ckey }) => {
  return (
    <div className='container'>
        <div className='search_box'>
      <input type="text" value={country} onChange={(e) => { setCountry(e.target.value) }} placeholder='Enter the country name' />
      <input className='search_btn' type="submit" onClick={handleSubmit} value='Search' /></div>
     {error && <p className='error'>Country Name Not Matched</p>}
     {!error &&  <div className='country-details'>
        {countryDetails && countryDetails[ckey] && (
          <>
            <div className='country-container'>
              <div className='country-img'>
                <img src={countryDetails[ckey].flag.large} alt="" />
                <p className='country-name'>{countryDetails[ckey].name}</p>
            <p className='off_name'><span>Official Name:</span>{countryDetails[ckey].official_name}</p>
              </div>
              <div className='img-detail'>
                <p><span>Capital:</span> {countryDetails[ckey].capital}</p>
                <p><span>Alpha Code:</span> {countryDetails[ckey].alpha2Code}</p>
                <p><span>Calling Code:</span> {countryDetails[ckey].callingCode}</p>               
                <p><span>Region:</span>{countryDetails[ckey].region}</p>
                <p><span>Sub-Region:</span>{countryDetails[ckey].subregion}</p>
                <p><span>Lattitude and Longitude:</span>{countryDetails[ckey].latLng.country.join(',')}</p>
                <p><span>Timezones:</span> {countryDetails[ckey].timezones}</p>
                <p><span>Population:</span> {countryDetails[ckey].population}</p>
              
              </div>
            </div>
           
          </>
        )}
      </div>}
    </div>
  );
}

export default FetchCountry;
