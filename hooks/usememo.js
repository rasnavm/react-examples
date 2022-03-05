import { useState,useMemo } from "react"

function Fact()
{
    const [num, setnum]=useState(5);
    const factvalue=useMemo(()=>Factorial(num),[num]);
    const [value,setvalue]=useState(0);
    const increment=()=>
    {
        console.log('incrementing');
        setnum(num+1);
    }
    const incrementval=()=>
    {
        console.log('----incrementing value----');
        setvalue(value+1);
    }
    return(
        <div>
            <h1>factorial of {num} is {factvalue}</h1>
            <button onClick={increment}>increment</button>
            <h1>value is {value}</h1>
            <button onClick={incrementval}>incVal</button>
        </div>
    )
}
const Factorial=(num)=>
{
   
    if(num==1)
    {
        console.log('---calculating factorial----');
        
        return num;
    }
    else
    {
        return num*Factorial(num-1);
    }
}
export default Fact;