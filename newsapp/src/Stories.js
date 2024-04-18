// import React ,{useEffect}from "react"
// const Stories=()=>{
//     let isloading=true;
//     let Api='https://hn.algolia.com/api/v1/search?query=html';
//     const fetchApiData=async(Api)=>{
//         try{
//             const response=await fetch(Api);
//             const data=await response.json();
//             isloading=false
//             console.log(data)
           

//         }
//         catch(error){

//         }
        
//     }

//     useEffect(() => {
//         fetchApiData(Api);
//     }, []);
//     if(isloading)
//     {
//         return <>
//         <h1>Loading....</h1>
//         </>
//     }
    
//    return(
//     <> 
//     <h2>My Tech News Post </h2>
//     </>
//    );

// }
// export default Stories