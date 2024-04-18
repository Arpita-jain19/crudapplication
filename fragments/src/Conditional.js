export default function  Conditional()
{
    function handleRegister(event)
    {
        event.preventDefault();
        console.log("HEllo world")

    }
    let email="jainarpita56@gmail.com"
    let age=90
    return(
       

        <>
        
        <form>
          {
            age>18&&email=="jainarpita56@gmail.com"?(
                <>
                <input type="email" placeholder="Enter your email" />
                <button onClick={handleRegister}>Submit</button> </>
                
            ):(
                <h1>You're not eligible for this post</h1>
            )
          }
        </form>
        
        </>
    );


}