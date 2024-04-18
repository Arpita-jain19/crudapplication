import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'; 
 import Test from './Test';
function App() {
 
  let foodItems=['Daal','Rice','Roti','Milk','Vegetables'];
  return (
   <>
   <h1>Healthy Food</h1>
    <ul class="list-group">
      {
         foodItems.map(item=>
        <li key={item} class="list-group-item">{item}</li>
      )
    }
    
</ul>
<Test isGoal={true } val={0}></Test>
</>
  );
}

export default App;
