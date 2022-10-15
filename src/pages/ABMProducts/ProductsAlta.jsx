import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import firebase from '../../config/firebase';
import { Form, Button, Spinner } from 'react-bootstrap';
import FormCool from '../../components/FormCool';
import { crearProducto } from '../../services/ProductServices';
import AlertCool from '../../components/AlertCool';

function ProductsAlta(){
    const [alert, setAlert] = useState({variant: "", text: ""})
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (data) => {
        try{
            setLoading(true)
            const document = await crearProducto(data)
            console.log(document)
            if(document){
                await firebase.db.collection("productos")
                setAlert({variant: "success", text: "Producto Creado Exitosamente"})
                setLoading(false);
            }
        } catch(e){
            console.log(e.code)
        }
    }

    return(
        <div>
            <h1>Alta de Productos</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormCool label="Nombre" register={{...register("name", {required: true})}}/>
                    {errors.name && <div>El campo nombre es obligatorio</div>}
                <FormCool label="Precio" register={{...register("price", {required: true})}}/>
                    {errors.price && <div>El campo Precio es obligatorio</div>}
                <FormCool label="Categoria" register={{...register("price", {required: true})}}/>
                    {errors.categories && <div>El campo Categoria es obligatorio</div>}
                <FormCool label="Descripción" register={{...register("description", {required: true})}}/>
                    {errors.description && <div>El campo Descripción es obligatorio</div>}
                    <FormCool label="SKU" register={{...register("sku", {required: true})}}/>
                    {errors.sku && <div>El campo SKU es obligatorio</div>}
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="sm" disabled={isLoading}>{isLoading ? <Spinner animation="grow" size="sm" variant="light" /> : "Crear Producto"}</Button>
                </div>
                <AlertCool {...alert}></AlertCool>
            </Form>
        </div>
    )
}

export default ProductsAlta;