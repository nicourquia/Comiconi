import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertCool(props) {
    const styles = {
        alert:{
            marginTop: "20px",
            paddingTop: "5px",
            paddingBottom: "5px",
        }
    }
    const {variant, text} = props
    return ( 
        <Alert variant={variant} style={styles.alert}>
            {text}
        </Alert>
    );
}

export default AlertCool;