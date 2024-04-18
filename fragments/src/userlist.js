export default function Userlist()
{
    let list=[
        {
            name:"Arpita jain",
            age:21,
            gender:'F',
            email:'jainarpita56@gmail.com'
        },
        {
            name:"Neha jain",
            age:21,
            gender:'F',
            email:'jainarpita56@gmail.com'
        },
        {
            name:"kamlesh jain",
            age:21,
            gender:'F',
            email:'jainarpita56@gmail.com'
        },
    ];
    let names=["Arpita","kamlesh","Neha","papa","mumma"]
    return(
      <div>
        {
            list.map(({name,email,age,gender})=>(
                
                <ul>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{age}</li>
                    <li>{gender}</li>
                </ul>

                
            ))
        }
        {
            names.map((names)=>{
                return(
                   <table >
                    <th>{names}</th>
                    </table>
                );
            })
        }
      </div>
      
    );

}