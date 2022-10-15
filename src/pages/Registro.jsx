import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Spinner } from 'react-bootstrap';
import firebase from '../config/firebase';
import FormCool from '../components/FormCool';
import AlertCool from '../components/AlertCool';

function Registro(){
    const [alert, setAlert] = useState({variant: "", text: ""})
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        try{
            console.log("Datos Enviados", data, data.email, data.password)
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            console.log(responseUser)
            setLoading(true);
            if(responseUser.user.uid){
                const document = await firebase.db.collection("usuarios")
                .add({
                    name: data.name,
                    lastname: data.lastname,
                    password: data.password,
                    userId: responseUser.user.uid,
                })
                if(document){
                    setLoading(false)
                }
                setAlert({variant: "success", text: "Registrado Exitosamente"})    
            }
        } catch(e){
            console.log(e.code)
            if(e.code === "auth/email-already-in-use"){
                setAlert({variant: "warning", text: "El correo ya se encuentra registrado"})
            }
            setLoading(false)
        }
    }

    return(
        <div>
            <h1>Registro</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormCool label="Nombre" register={{...register("name", {required: true})}}/>
                    {errors.name && <div>El campo nombre es obligatorio</div>}
                <FormCool label="Apellido" register={{...register("lastname", {required: true})}}/>
                    {errors.lastname && <div>El campo apellido es obligatorio</div>}
                <FormCool label="E-Mail" type="email" register={{...register("email", {required: true})}}/>
                    {errors.email && <div>El campo email es obligatorio</div>}
                <FormCool label="Nombre de Usuario" register={{...register("username", {required: true})}}/>
                    {errors.username && <div>El campo Nombre de Usuario es obligatorio</div>}
                <FormCool label="Password" type="password" register={{...register("password", {required: true, minLength: 6})}}/>
                    {errors.password?.type === "required" && <div>El campo password es obligatorio</div>}
                    {errors.password?.type === "minLength" && <div>La contraseña debe tener al menos 6 caracteres</div>}
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="sm" disabled={isLoading}>{isLoading ? <Spinner animation="grow" size="sm" variant="light" /> : "Registrar"}</Button>
                </div>
                <AlertCool {...alert}></AlertCool>
            </Form>
        </div>
    )
}

export default Registro;