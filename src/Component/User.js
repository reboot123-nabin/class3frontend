import axios from "axios";
import { Component } from "react";
import { Navigate } from "react-router-dom";
class User extends Component{
    //constructor
    state={
        User:[],
        config:{
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
    },
    }

    deleteuser=(userid)=>{
        
        axios.delete('http://localhost:4000/deleteuser/'+userid,this.state.config).then((resp)=>{
            console.log("response",resp)    
        alert("delete successful")

        }).catch((error)=>{
            console.log(error);
            alert("delete failed")

        })

    }
    //method

    componentDidMount(){
        axios.get('http://localhost:4000/userall',this.state.config).then((response)=>{
            this.setState({
              User : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    
    render(){
        if(localStorage.getItem('userType') && localStorage.getItem('userType')!=='Admin'){
            return <Navigate to="/login"></Navigate>
        }
        if(localStorage.getItem('userType') && localStorage.getItem('userType')!=='User' && localStorage.getItem('userType')!=='Admin'){
            return <Navigate to="/login"></Navigate>
        }

        

        return(
            <>
            {this.state.User.map((val)=>{
                return(
                    <>

                    {val.username}
                {val.email}
                {val.password}
                {val.userType} 
                <img src={'http://localhost:4000/'+val.avatar} alt="image"></img>        
                <button class="delete" onClick={this.deleteuser.bind(this,val._id)}>Delete</button>
                
                    </>
                )
            })}


            </>
        )
    }

}

export default User;