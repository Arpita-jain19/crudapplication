import logo from './logo.svg';
import './App.css';
import Post from './components/post';
import Header from './components/header';
import {Routes,Route} from "react-router-dom"
import Layout from './components/layout';
import Login from './components/login';
import RegisterPage from './components/RegisterPage';
function App() {
  return(
   
  <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index  element={<Post/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Route>
      
    </Routes>
    
    </>
   
   
   
  );
  ;
}

export default App;
