//redux-thunk
export const ageUpAsync=(val)=>
{
    return {type:'ADD_AGE' ,value:val};
    
};
export const ageUp=(val)=>
{
    return dispatch=>{setTimeout(()=>{dispatch(ageUpAsync(val))},5000)   
    }
};

export const ageDown=(val)=>
{
    return{type:"SUB_AGE",value:val}
}
export const INC=()=>
{
    return{
        type:"INC",
    
    }
}
export const Add_List=(text)=>
{
    return{
        type:"ADD",
        value:text,
    }
}

export const Upper_case=()=>
{
    return{
        type:"UPPER",
        
    }
}