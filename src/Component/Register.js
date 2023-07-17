import { Component } from "react";
import axios from "axios";
class Register extends Component{

    //constructor
        state={
            email:"",
            username:"",
            password:"",
            userType:"",
            avatar:""
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
      
      filehandle=(e)=>{
        this.setState({
          avatar:e.target.files[0]
        })
      }
    //event handling

    btnlogin=(e)=>{
        e.preventDefault();
        //stop browser refresh
        const data=new FormData();
        data.append("avatar",this.state.avatar);
        data.append("username",this.state.username);
        data.append("email",this.state.email);
        data.append("password",this.state.password);
        data.append("userType",this.state.userType);
        
        //connection
        axios.post('http://localhost:4000/register',data).then((response)=>{
            console.log("login",response.data)
            //localstorage token and usertType
            alert("login successful");
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

            <form action="action_page.php" method="post" enctype="multipart/form-data">
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
  <label for="uname"><b>Username</b></label>
  
  <input type="text" placeholder="Enter Email" name="username" defaultValue={this.state.username} onChange={this.changehandle} required/>

    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={this.state.email} onChange={this.changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={this.state.password} onChange={this.changehandle}required/>

    <label for="psw"><b>userType</b></label>
    <input type="text" placeholder="Enter Password" name="userType" defaultValue={this.state.userType} onChange={this.changehandle}required/>

    <label for="psw"><b>Image</b></label>
    <input type="file" placeholder="Enter Password" name="avatar" defaultValue={this.state.avatar} onChange={this.filehandle}required/>

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

export default Register;