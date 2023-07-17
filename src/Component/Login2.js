import userEvent from "@testing-library/user-event";
import React,{useState} from "react";
import axios from "axios";

function Login2(){
    //state
    const[User,SetUser]=useState({email:"",password:""});
    //data change   
    const changehandle=(e)=>{
        e.preventDefault();
        const{name,value}=e.target;
        SetUser({...User,[name]:value})
    }
    

    const btnlogin=(e)=>{
        e.preventDefault();
        
        axios.post('http://localhost:4000/login',User).then((response)=>{
            console.log("login",response.data)
            //localstorage token and usertType
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userType',response.data.userType);
            alert("login successful");
        })
        .catch((error)=>{
            console.log(error);
            alert("login failed")
        })
    }

return(
    <>
    <h1>i am login</h1>
    <form action="action_page.php" method="post">
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={User.email} onChange={changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={User.password} onChange={changehandle}required/>

    <button type="submit" onClick={btnlogin}>Login</button>
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

export default Login2;