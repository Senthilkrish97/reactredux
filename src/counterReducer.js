import { DECREMENT, INCREMENT } from "./counterActions";

export const counterReducer=(state=0,action)=>{
    debugger;   
  switch(action.type){
    case INCREMENT: 
    return state+1;
    case DECREMENT:
    return state-1;
    default:
    return state;
  }
}