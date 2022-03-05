
/* import {createStore} from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'; */


const initialState={
    count:0,
   
 list:[],
 name:'rasna',
 age:21,
 
}

/*{
    type:Inc,
}*/

//Action generator
/* export const ageUp=()=>
{
    setTimeout(()=>{dispatch(ageUpAsync(val))},5000)   
}
export const AsyncageUp=()=>
{
    return{type:"ADD_AGE"}
}
export const ageDown=()=>
{
    return{type:"SUB_AGE"}
} */
/* export const INC=()=>
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
} */
 
export const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "INC":return{...state,count:state.count+1};
        case "DEC":return{count:state.count-1};
        case "ADD":return {...state,list:state.list.concat(action.value)};
        case "UPPER":return {...state,name:state.name.toUpperCase()};
        case "ADD_AGE":return{...state,age:state.age+1};
        case "SUB_AGE":return{...state,age:state.age-1};
        
        default:return state;
    }

    
}
//const store=createStore(reducer,applyMiddleware(thunk));

