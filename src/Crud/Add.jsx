import React, {useState} from 'react'
import Data from './Data'
import { v4 as uuid} from 'uuid'
import {Link,useNavigate } from 'react-router-dom'
import './App.css'

export default function Add() {

    const [name,SetName] = useState('');
    const [age,SetAge] = useState('');
    
    let history = useNavigate();


    const handleSubmit=(e) =>{
        e.preventDefault();
    
        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name;
        let b = age;

        Data.push({id: uniqueId, name:a, age:b});

        history('/')
    }
    

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form>
                <table className='A-table'>
                    <tr>
                        <td><input type="text" onChange={(e) => SetName(e.target.value)} placeholder='Enter name'/></td>
                    </tr>
                    <tr>
                        <td><input onChange={(e) => SetAge(e.target.value)} placeholder='Enter age'/></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
