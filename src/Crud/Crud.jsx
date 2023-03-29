import React from 'react'
import Data from './Data'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Crud = () => {

    let history = useNavigate();
    let num = 1;

    const HandleDelete = (id) => {
        var index = Data.map(function (e) {
            return e.id
        }).indexOf(id)

        Data.splice(index, 1);

        history("/")
    };

    const HandleEdit = (id, name, age) => {
        localStorage.setItem('name', name)
        localStorage.setItem('age', age)
        localStorage.setItem('id', id)
    }

    const [SearchTerm,SetSearchTerm] = useState("")

    return (
        <>
            <div className='C-table' style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>

                {<table>
                    <thead>
                        <tr>
                            <th id='sr'>No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Actions</th>
                            <th id='search'>
                                <div className='Search'>
                                    <input placeholder='Search' onChange={(e)=>{
                                        SetSearchTerm(e.target.value);
                                    }}/>
                                    <button>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { Data.filter(val=>{
                            if(SearchTerm === ''){
                                return val;
                            }
                            else if(
                                val.name.toLowerCase().includes(SearchTerm.toLowerCase())
                            ){
                                return val
                            }
                        }).map((item) => {
                                    return (
                                        <tr>
                                            <td>{num++}</td>
                                            <td style={{ textAlign: "left", paddingLeft: "13.5%" }}>{item.name}</td>
                                            <td style={{ width: "10%" }}>{item.age}</td>
                                            <td style={{ width: "25%" }}>
                                                <Link to={'/edit'}>
                                                    <button onClick={() => HandleEdit(item.id, item.name, item.age)}>edit</button>
                                                </Link>&emsp;
                                                <button onClick={() => HandleDelete(item.id)}>delete</button>
                                            </td>
                                        </tr>
                                    )
                                }) 
                        }
                    </tbody>
                    <br></br>
                    <Link to={'/add'}>
                        <button>Create</button>
                    </Link>
                </table>}
            </div>
        </>
    )
}


export default Crud;