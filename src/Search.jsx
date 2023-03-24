import React, { useState } from 'react'
import './Search.css'
import Cities from './Cities'

const Search = () => {


  const [value, SetValue] = useState('');

  const onChange = (event) => {
    SetValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    SetValue(searchTerm)
    console.log('search', searchTerm)
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "5%" }}>
          <div style={{ display: "flex" }}>
            <input placeholder='search' value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className='dropdown'>
              {
                Cities.filter(e =>{
                   const searchTerm = value.toLowerCase();
                   const fullName = e.name.toLowerCase();

                   return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
                }).slice(0,15)
                .map((e) => (
                  <p onClick={() => onSearch(e.name)} key={e.name}>{e.name}</p>
                ))
              }
            </div>
        </div>
      </div>
      </>
    )
}
    export default Search;