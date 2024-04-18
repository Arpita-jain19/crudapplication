import AppName from "./components/Appname";
import Addname from './components/Addname';
import DeleteMilk  from "./components/DeleteMilk";
import GoCollege from "./components/Gocollege";
import './App.css';
export default function App()
{
  return (
  <center className="todo-container">
   <AppName/>
    <Addname/>
    <div className="item-container">
  <DeleteMilk/>
  <GoCollege/>
  </div>
  </center>
  );
}