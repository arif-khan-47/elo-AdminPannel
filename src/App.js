import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Admin/Home/Home';
import Setting from './Components/Admin/Setting/Setting';
import Users from './Components/Admin/Users/Users';
import Login from './Components/Admin/Login';
import Register from './Components/Admin/Register';
import Notifications from './Components/Admin/Notification/Notifications';
import {useSelector} from 'react-redux'
import ProtectedRoute from './Routes/ProtectedRoute';


function App() {
  const {isAuthenticated} = useSelector((state)=>state.root);
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<ProtectedRoute isAuthenticated={
          true
          // isAuthenticated
        } 
        adminRoute={true} 
        isAdmin={
          true
        // user.role === "Admin" ? true : false
        }
        />}>
            <Route path="/dashboard" element={ <Home />}/>
            <Route path="/setting" element={ <Setting/>}/>
            <Route path="/users" element={ <Users/>} />
            <Route path="/login" element={ <Login/>} />   
            <Route path="/register" element={ <Register/>} /> 
            <Route path="/notification" element={ <Notifications/>} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
