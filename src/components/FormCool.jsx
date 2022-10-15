import React from 'react';
import { Form, Button } from 'react-bootstrap';
function FormCool(props){
    const {label, type, register} = props
    return(
        <Form.Group className="m-0">
                    <Form.Label>{label}</Form.Label><br/>
                    <Form.Control type={type || "text"} placeholder={label} {...register}/><br/>
        </Form.Group>
    );
}

export default FormCool;