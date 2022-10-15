import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Spinner } from 'react-bootstrap';
import firebase from '../../config/firebase'
import FormCool from '../../components/FormCool';
import AlertCool from '../../components/AlertCool';
import {useParams} from "react-router-dom";
import { getByIdProductos } from '../../services/ProductServices';

function ProductsUpdate(){
    const { register, handleSubmit, setValue,formState: { errors }} = useForm();
    const [alert, setAlert] = useState({variant: "", text: ""})
    const [isLoading, setLoading] = useState(false);
    const {id} = useParams();
    const onSubmit = async (data) => {
        try{
            setLoading(true)
            await firebase.db.doc("productos/"+id)
            .set(data)
            if(data){
                setAlert({variant: "success", text: "Producto Modificado Exitosamente"})
                setLoading(false)
                console.log(data)
            }
        } catch(e){
            console.log(e.code)
        }
    }
    useEffect(
        () => {
            const request = async () => {
                try{
                    const response = await getByIdProductos(id)
                    if(response){
                        setValue("name", response.data().name)
                        setValue("price", response.data().price)
                        setValue("categories", response.data().categories)
                        setValue("description", response.data().description)
                        setValue("sku", response.data().sku)
                    }
                }catch(e){
                    console.log(e)
                }
            }
            request()
        },
        [id, setValue]
    )
    const handleDelete = async ()=>{
        try{
            setLoading(true)
            await firebase.db.doc("productos/"+id)
            .delete()
            .then(() => {
                setAlert({variant: "warning", text: "Producto Eliminado Exitosamente"})
                setLoading(false)
            })
        }catch(e){
            console.log(e)
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
                <FormCool label="Categoria" register={{...register("categories", {required: true})}}/>
                    {errors.categories && <div>El campo Categoria es obligatorio</div>}
                <FormCool label="Descripción" register={{...register("description", {required: true})}}/>
                    {errors.description && <div>El campo Descripción es obligatorio</div>}
                    <FormCool label="SKU" register={{...register("sku", {required: true})}}/>
                    {errors.sku && <div>El campo SKU es obligatorio</div>}
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="sm" disabled={isLoading}>{isLoading ? <Spinner animation="grow" size="sm" variant="light" /> : "Modificar Producto"}</Button>
                    <Button onClick={handleDelete} variant="danger"size="sm" disabled={isLoading}>{isLoading ? <Spinner animation="grow" size="sm" variant="light" /> : "Borrar"}</Button>
                </div>
                <AlertCool {...alert}></AlertCool>
            </Form>
        </div>
    )
}

export default ProductsUpdate;