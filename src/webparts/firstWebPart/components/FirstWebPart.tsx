import * as React from 'react';
// import styles from './FirstWebPart.module.scss';
import type { IFirstWebPartProps } from './IFirstWebPartProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import Home from '../../../Code/components/Home/Dashboard/Home';
import UseStateHook from '../../../Code/hooks/Counter';
// import UseStateHook from '../../../Code/hooks/useStateHookseStateHook';
// import useStateHook from '../../../Code/hooks/useStateHook';
// import Us
const FirstWebPart:React.FC<IFirstWebPartProps>=(props)=>{

  //variables in react
  //const ->const is constant variable which can not be changed.

  const name:string="Vijay";

  console.log(name);

  //update name
  // name="Vijay Thapakar"; // This will throw an error because 'name' is a constant variable.

  //let -> let is a variable which can be changed. it is also called as mutable variable or scope variable.

  let age:number=25;
  console.log(age);
  //update age
  age =56;
  console.log(age);

  //var -> var is a variable which can be changed. it is also called as mutable variable or scope variable. but it is not recommended to use var because it has some issues.

  var city:string="Pune";
  console.log(city);
  //update city
  city="Mumbai";
  console.log(city);

  //in modern javascript we use const and let instead of var because const and let are block scoped and var is function scoped.

  //function in react 

  //non parameter function

  const showMessaage=()=>{
    console.log("Hello Vijay");
  }

  //parameter function

  const showMessageWithParameter=(name:string)=>{
    console.log("Hello "+name);
  }
  return(
    <>
    <Home/>

    {showMessaage()}

    {showMessageWithParameter("Vijay")}

    {props.description}
    {props.userDisplayName}
    <p>{props.country}</p>
    <p>{props.theme}</p>
    <p>{props.age}</p>
    <p>{props.enableFeature?"Enabled":"Disabled"}</p>
    <p>{props.showTitle?"Title: " + props.showTitle:"Title not shown"}</p>

    <br/>
    <UseStateHook/>
    <br/>
    {props.siteurl}
    </>
  )
}

export default FirstWebPart;