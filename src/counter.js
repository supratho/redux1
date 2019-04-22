import React from 'react';
import {connect} from 'react-redux';

function Counter(props){
    console.log('render',props);
    return (
        <div>
            <h1>I am a counter</h1>
            <p>Count:{props.count} </p>
            <button onClick={props.onIncrementClick} className='btn btn-primary'>increment</button>
            <br/><br/>
            <button onClick={props.onDecrementClick}  className='btn btn-danger'>decrement</button>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps',state);
    return{
        count: state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        onIncrementClick: ()=>{
          console.log('clickin')
          const action ={ type: 'INCREMENT'};

          dispatch(action);
        },
          onDecrementClick: ()=>{
            console.log('clickin')
          const action1 ={ type: 'DECREMENT'};
          
          dispatch(action1);
          
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);