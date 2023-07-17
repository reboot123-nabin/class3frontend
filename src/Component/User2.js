import { useState,useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import { Navigate } from "react-router-dom";
function User2(){
    const[User,SetUser]=useState([]);
    // const Config=useState({headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}})


    useEffect(()=>{
      
    
            axios.get('http://localhost:4000/userall',{
                 headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
            }).then((response)=>{
                SetUser(response.data);
            })
            .catch((error)=>{
                console.log(error);
            })
        
    },[])
    const deleteuser=(userid)=>{
        axios.delete('http://localhost:4000/deleteuser/'+userid,{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
       }).then((resp)=>{
            console.log("response",resp)    
        alert("delete successful")
        }).catch((error)=>{
            console.log(error);
            alert("delete failed")

        })
    }

    

    return(

        
        <>

        {
            User.map((curElem)=>{
                return(
                    <>
                        {curElem.username}
                        {curElem.password}
                        {curElem.email}
                        {curElem.userType}
                        <img src={'http://localhost:4000/'+curElem.avatar}></img>

                        <button class="delete" onClick={deleteuser.bind(this,curElem._id)}>Delete</button>
                        <Link to={"/updateuser/"+curElem._id}>Update</Link>
                    </>
                )
            })
        }
        </>
    )
}

export default User2;