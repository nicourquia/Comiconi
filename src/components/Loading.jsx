import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loading (props){
    const { loading, children } = props
    const styles ={
        spinner:{
            position: "fixed",
            top: "50%",
            left: "50%",
        }
    }
    if(loading){
        return(
            <div>
                <Spinner style={styles.spinner} animation="grow" variant="primary" />
            </div>
        )
    } else {
        return(
            <div>
                {children}
            </div>
        )
    }
}

export default Loading;