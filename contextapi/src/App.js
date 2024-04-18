import CompA from "./component/compA";
import React, { createContext } from 'react';
const firstName=createContext();
const lastName=createContext();
function App() {
  return (
    <>
    <firstName.Provider value={"Arpita....."}>
      <lastName.Provider value={"JAin"}>
    <CompA/>
    </lastName.Provider>
    </firstName.Provider>
    </>
  );
}
export {firstName,lastName}
export default App;
