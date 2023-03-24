import React, {useState} from 'react'
import Data from './Data'
import { v4 as uuid} from 'uuid'
import {Link,useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'

export default function Edit() {

    const [name,SetName] = useState('');
    const [age,SetAge] = useState('');
    const [id,SetId] = useState('');
    
    let history = useNavigate();
    
    var index = Data.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e) =>{
        e.preventDefault();
    
        let a = Data[index];
        a.name = name;
        a.age = age;

        history('/')
    }
    
    useEffect(() => {
         SetName(localStorage.getItem('name'))
         SetAge(localStorage.getItem('age'))
         SetId(localStorage.getItem('id'))
    },[])

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <form>
                <table className='A-table'>
                    <tr>
                        <td><input type="text" value={name} onChange={(e) => SetName(e.target.value)} placeholder='Enter name'/></td>
                    </tr>
                    <tr>
                        <td><input type="text" value={age} onChange={(e) => SetAge(e.target.value)} placeholder='Enter age'/></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={(e)=>handleSubmit(e)}>Update</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
