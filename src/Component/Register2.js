import React, { useState } from "react"
import axios from "axios";
function Register2(){
    const[User,SetUser]=useState({username:"",email:"",password:"",userType:"",avatar:""})

    const changehandle=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        SetUser({...User,[name]:value})
        
    }

    const filehandle=(e)=>{
        SetUser({avatar:e.target.files[0]})
    }


    const btnregister=(e)=>{
        e.preventDefault();

        const data=new FormData();
        data.append('username',User.username)
        data.append('email',User.email)
        data.append('password',User.password)
        data.append('userType',User.userType)
        data.append('avatar',User.avatar)
        axios.post('http://localhost:4000/register',data).then((response)=>{


            console.log("login",response.data)
            //localstorage token and usertType
            alert("register successful");
        })
        .catch((error)=>{
            console.log(error);
            alert("login failed")
        })
    }
    


    return(
        <>
         <form action="action_page.php" method="post" enctype="multipart/form-data">
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
  <label for="uname"><b>Username</b></label>
  
  <input type="text" placeholder="Enter Email" name="username" defaultValue={User.username} onChange={changehandle} required/>

    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={User.email} onChange={changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={User.password} onChange={changehandle}required/>

    <label for="psw"><b>userType</b></label>
    <input type="text" placeholder="Enter Password" name="userType" defaultValue={User.userType} onChange={changehandle}required/>

    <label for="psw"><b>Image</b></label>
    <input type="file" placeholder="Enter Password" name="avatar" defaultValue={User.avatar} onChange={filehandle}required/>

    <button type="submit" onClick={btnregister}>Login</button>
    <label>
      <input type="button" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
        
        </>
    )

}

export default Register2