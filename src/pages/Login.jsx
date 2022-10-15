import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Spinner } from 'react-bootstrap';
import firebase from '../config/firebase'
import FormCool from '../components/FormCool';
import AlertCool from '../components/AlertCool';

function Login({setLoginUser}){
    const styles = {
        loginErrors:{
            color: "#A91B0D"
        }
    }
    const [alert, setAlert] = useState({variant: "", text: ""})
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        try{
            setLoading(true)
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            if(responseUser){
                setLoading(false)
            }
            setLoginUser(true)
            console.log(responseUser.user.uid)
            setAlert({variant: "success", text: "Logueado Exitosamente"})
        } catch(e){
            console.log(e.code)
            setAlert({variant: "danger", text: "Error al Loguear"})
            setLoading(false)
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <FormCool label="E-Mail" type="email" register={{...register("email", {required: true})}}/>
                    {errors.email && <div style={styles.loginErrors}>El campo email es obligatorio</div>}
                {/* <FormCool label="Nombre de Usuario" register={{...register("username", {required: true})}}/>
                    {errors.username && <div>El campo Nombre de Usuario es obligatorio</div>} */}
                <FormCool label="Password" type="password" register={{...register("password", {required: true, minLength: 6})}}/>
                    {errors.password?.type === "required" && <div style={styles.loginErrors}>El campo Password es obligatorio</div>}
                    {errors.password?.type === "minLength" && <div style={styles.loginErrors}>La contraseña debe tener al menos 6 caracteres</div>}
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="sm" disabled={isLoading}>{isLoading ? <Spinner animation="grow" size="sm" variant="light" /> : "Log in"}</Button>
                </div>
                <AlertCool {...alert}></AlertCool>
            </Form>
        </div>
    )
}

export default Login;