const { createStore } =require('redux');
const initialState={
    age:21,
};
const myReducer=(state=initialState,action)=>
{
    const newState={...state};
    if(action.type==="Add")
    {
        newState.age+=1;
    }
    if(action.type==="Sub")
    {
        newState.age-=1;
    }
    return newState;
}


const store=createStore(myReducer);
store.subscribe(()=>{
    console.log(" State changed" + JSON.stringify(store.getState()));
})

store.dispatch({type:"Add"});
store.dispatch({type:"Add"});
store.dispatch({type:"Add"});
store.dispatch({type:"Add"});


/* console.log('finalstate' +JSON.stringify(store.getState())); */
store.dispatch({type:"Sub"});
/* console.log('After substract' +JSON.stringify(store.getState())); */
