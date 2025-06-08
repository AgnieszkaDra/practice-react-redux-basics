import React from 'react';
import { connect } from 'react-redux'
import { useStore, useSelector } from 'react-redux'; 

const Task02 = ({main}) => {

    const getMessage = ({message = 'Magazyn nie został zaimplementowany prawidłowo!'}) => {
        return message;
    }

    const message = useSelector((state) => state.main?.message ?? getMessage());

    return (
        <section>
            <h1>Task 2</h1>
            
            <div>{ message }</div>
        </section>
    );
}


const mapStateToProps = (state) => ({
    main: state.main
  })
  

export default connect(
    mapStateToProps
  )(Task02)

