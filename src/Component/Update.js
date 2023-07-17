import axios from "axios"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function Update(){
    const{id}=useParams();

//initialize
    const[user,setUser]=useState({username:"",email:"",password:"",userType:"",nimage:""});

    const changeHandle=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
    }   
    useEffect(()=>{
        axios.get("http://localhost:4000/usersingle/"+id).then((response)=>{
            console.log("response",response)
            setUser(response.data);

        })
        .catch((error)=>{
            console.log("error",error)
        })
    },[id])

    const btnUpdate=(e)=>{
        e.preventDefault();

        axios.put('http://localhost:4000/updateOne/'+id,user,{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }).then((response)=>{
        console.log("res",response)
        
         alert("update successful");
        }).catch((error)=>{
            console.log("error",error);
        })
    }


    
    return(
        <>
            

            <section class="register container-fluid bg">
<h1 class="r1">this is Add Bus page</h1>
                    <section class="row justify-content-center">
                       
                        <form class="cover">
                        
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"name="username">username</label>
    <input type="email" class="form-control"  placeholder="title" name="username" defaultValue={user.username} onChange={changeHandle}id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="name" name="email" defaultValue={user.email} onChange={changeHandle}></input>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="name" name="password" defaultValue={user.password} onChange={changeHandle}></input>
  </div>


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">userType</label>
    <input type="email" class="form-control"placeholder="desc" name="userType" defaultValue={user.userType} onChange={changeHandle}></input>
  </div>
  

  <button type="submit" class="btn btn-primary" onClick={btnUpdate} >Submit</button>
</form>
                        </section>
                    </section>
        </>
    )
}

export default Update;