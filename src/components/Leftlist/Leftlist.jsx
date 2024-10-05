import React, { useState } from 'react'
import './Leftlist.css'

import User from '../User/User'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../Api/UserRequest'
function Leftlist() {
const [persons, setPersons] = useState([])
const { user } = useSelector((state) => state.authReducer.authData);
    useEffect(()=>{
const fetchPersons = async()=>{
    const{data} = await getAllUser();
    setPersons(data)
    console.log(data);

};
fetchPersons()


    },[])
    return (
        <div className="followerslist">
            
             <h3>SUGGESTIONS</h3>
             {persons.map((person, id)=> {
                if(person._id !== user._id){
                return(
                  <User person={person} key ={id}/>
                )}
             } )}

        </div>
    )
}

export default Leftlist
