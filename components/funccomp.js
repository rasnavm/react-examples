function funcomp()
{
    let name='rasna';
     function handleClick()
    {
        name=name.toUpperCase();
        alert(name)
    }
       return  <div>
           <h2>functionalcomponents</h2>
            <h2> created by {name}</h2>
            <button onClick={handleClick}>toUpperCase</button>
            </div>
    
}

export default funcomp;