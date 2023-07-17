import { Component } from "react";
import axios from "axios";
class Login extends Component{

    //constructor
        state={
            email:"",
            password:""
        }

    //method

    //data render
    // componentDidMount(){
    // }
    //data store
    //change data store in state
      changehandle=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      
    //event handling

    btnlogin=(e)=>{
        e.preventDefault();
        //stop browser refresh
        //connection
        axios.post('http://localhost:4000/login',this.state).then((response)=>{
            console.log("login",response.data)
            
            //localstorage token and usertType
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userType',response.data.userType);
            alert("login successful");
            window.location.href="/user"
        })
        .catch((error)=>{
            console.log(error);
            alert("login failed")
        })

    }

    render(){
        return(
            <>
            <h1>i am login</h1>

            <form action="action_page.php" method="post">
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={this.state.email} onChange={this.changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={this.state.password} onChange={this.changehandle}required/>

    <button type="submit" onClick={this.btnlogin}>Login</button>
    <label>
      <input type="button" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
ADVERTISEMENT

            </>
        )
    }
}

export default Login;