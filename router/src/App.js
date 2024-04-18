import logo from './logo.svg';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Contact from './components/Contact'
import Page from './components/Page';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="blogs" element={<Blogs />}/>
     <Route path="contact" element={<Contact />}/>
    <Route path='*' element={<Page />}/>
    </Route>
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
