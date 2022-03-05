//import logo from './logo.svg';


import './App.css';
import React from 'react';

import Click from './renderprops/click';
import Hover from './renderprops/hover';
import User from './renderprops/user';
/* import Counter from './renderprops/counter'; */
/*import AddList from './hooks/usesatatelist';
import Example from './hooks/useeffectex1';
import Example1 from './hooks/useeffectex2';
import MouseHook from './hooks/useeffectex3';
import FetchApi from './api/fetchapi';
import Usestateexample from './hooks/usestate';
import HookCounter from './hooks/usestatecounte1';
import HookCounter2 from './hooks/usestatecounter2';
import FullName from './hooks/usestatecounter3';
*/
import Pureclass from './purecomponents/classA';
/* import ToDo from './state/todo'; */
/* import Check from './state/checkbox'; */
/* import ClassComponent from './components/classcomp'; */
/*import ClassB from './Lifecyclecomponents/classB'
import FunctionalComponents from './components/funccomp';

import F1 from './props/f1';

import Message from './state/message';
import Input from './state/input';
import Count from './state/counter';
import List from './state/listrender';
import ListArr from './state/list2';

import ToUpdate from './state/update';


import Clickcounter from './higherordercomponent/click';
import Hovercounter from './higherordercomponent/hover' ;
*/
/*import Ref1 from './Ref/ref1';


import Lower from './state/tolower';
import Fact from './hooks/usememo';
import UseEffect1 from './hooks/useeffectexample';
import Usecntxt from './hooks/usecontext1';
export const contextuser=React.createContext();
export const contextvalue=React.createContext();*/
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import Inputlist from './Redux/inputlist';
import  Uppercase1 from './Redux/changecase';
import { Provider } from "react-redux";

import Fccounter from './Redux/funcounter';
import Changeupper from './Redux/changecasefn';
import Reduxcounter from './Redux/counter';
import AgeCount from './Redux/agecount';
import { reducer } from './Redux/store';
function App() {
  const flag=true;
  const store=createStore(reducer,applyMiddleware(thunk));
  return (
    <div className="App">
      <h2> React</h2>
      {/* <ClassComponent></ClassComponent> */}
      {/*<Click></Click>
      <Hover></Hover>
      <User name={(flag)=>flag? 'rasnas' :'guest'}></User>
    <Counter counting={(count1,handlecount1)=><Click count={count1} handlecount={handlecount1}></Click>}></Counter>
    <Counter counting={(count,handlecount)=><Hover count={count} handlecount={handlecount}></Hover>}></Counter>*/}
{/* <Pureclass></Pureclass> */}
    {/*  <Example></Example>
      <Example1></Example1>
      <MouseHook></MouseHook>
      <contextuser.Provider value={'rasna'}>
        <contextvalue.Provider value={'UI'}>
            <Usecntxt/>
      </contextvalue.Provider>
      </contextuser.Provider>
      <Fact></Fact>
      <Lower></Lower>*/}
      <Provider store={store}>
        <AgeCount></AgeCount>
      <Changeupper></Changeupper>
      <Fccounter></Fccounter>  
       <Reduxcounter></Reduxcounter>
<Uppercase1></Uppercase1> 
<Inputlist></Inputlist>
    </Provider>
 
{/*
<UseEffect1></UseEffect1> */}
      { /*<FetchApi></FetchApi>
      <Clickcounter></Clickcounter>
   <Hovercounter></Hovercounter>

      
      
      
   <FunctionalComponents></FunctionalComponents>
    
      <F1></F1>
      <ClassB></ClassB>
       <input></input> 
      <Message></Message>
  <Count></Count>
   <List></List>
   <ListArr></ListArr>
   
   <ToUpdate></ToUpdate>
   
   
   
<Ref1></Ref1>*/}
{/* <Check></Check> */}
{/* <ToDo></ToDo> */}
{/*
<Usestateexample></Usestateexample>
<HookCounter></HookCounter>
<HookCounter2></HookCounter2>
<FullName></FullName>
<AddList></AddList>*/}
    </div>
  );
}

export default App;
