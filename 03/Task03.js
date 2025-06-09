import React from 'react';
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux';

const Task03 = ({main}) => {
    const time = useSelector((state) => state.main?.time ?? null);
   
    console.log(time)
    const dispatch = useDispatch();

    return (
        <section>
            <h1>Task 3</h1>
            <div>
                <time>{ time ? time.toLocaleTimeString() : '00:00:00' }</time>
                <button onClick={ () => dispatch( {type: 'getCurrentTime'} )}>get current time</button>
            </div>
        </section>
    );
}


const mapStateToProps = (state) => ({
    main: state.main
  })
  

export default connect(
    mapStateToProps
  )(Task03)


