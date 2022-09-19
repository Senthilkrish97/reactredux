import { connect } from "react-redux";
import { decrementCount, incrementCount } from "./counterActions";

const Counter =({count,decrement,increment})=>{
  debugger;
    return(
        <div>
        <button onClick={()=>decrement()}>-</button>
        <span>{count}</span>
        <button onClick={()=>increment()}>+</button>
      </div>
    )
}

const mapStateToProps=(state)=>({
    count:state
  });
  const mapDispatchToProps=(dispatch)=>({
    decrement:()=>dispatch(decrementCount()),
    increment:()=>dispatch(incrementCount())
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Counter);