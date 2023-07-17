import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './Header';
import Login from './Component/Login';
import Login2 from './Component/Login2';
import Register from './Component/Register';
import Register2 from './Component/Register2';
import User from './Component/User';
import User2 from './Component/User2';
import Update from './Component/Update';
import Logout from './Component/Logout';
import Reducer from './Component/Reducer';
import ChildA from './Props/ChildA';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/header" exact element={<Header/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/login2" exact element={<Login2/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/register2" exact element={<Register2/>}/>
        <Route path="/user" exact element={<User/>}/>
        <Route path="/user2" exact element={<User2/>}/>
        <Route path="/updateuser/:id" exact element={<Update/>}/>
        <Route path="/logout" exact element={<Logout/>}/>
        <Route path="/reducer" exact element={<Reducer/>}/>
        <Route path="/child" exact element={<ChildA/>}/>
      </Routes>
      </BrowserRouter>
          </div>
  );
}

export default App;
