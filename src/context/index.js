import React from "react";

const MyContext = React.createContext({

  groupTests: [],
  setGroupTests: () => {},

  tests:[],
  setTests:()=>{},
  
  testQuestions:[],
  setTestQuestions:()=>{},

  indexDataTests: " " , 
  setIndexDataTests : ()=>{},
  indexDataGroupTests: " " , 
  setIndexDataGroupTests : ()=>{},
  indexDataQuestion: " " , 
  setIndexDataQuestion : ()=>{},
  
});

export default MyContext;
