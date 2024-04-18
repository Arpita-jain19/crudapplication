export default function Test(props)
{
    // const shoot=(a)=>{
    //     alert(a)
    // }
    // return(
    //     <>
    //     <h1>Props demo...{props.brand.model}</h1>
    //     <button onClick={()=>shoot("Goal")}>Take the shot!</button>
    //     </>
    // );
    const isGoal=props.val;
    if(isGoal)
    return (<h1>Hello</h1>);
    else
    return (<h1>Hii</h1>);
}