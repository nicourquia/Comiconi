import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getByIdProductos} from "../services/ProductServices"
import { Button } from 'react-bootstrap'
import Loading from "../components/Loading"
import { BsCart } from "react-icons/bs"

function Detalle() {
  const [products,setProducts] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  const styles ={
    cantselector:{
        width: "40px",
    },
  }
  console.log("Id", id)
  useEffect(
    ()=>{
        const request = async ()=>{
            try{
              const document = await getByIdProductos(id)
              if(document){
                setProducts(document.data())
                setLoading(false)
              }
            }catch(e){
              console.log(e)
            }
          }
          request()
        },[id]
  )
    return (
      <Loading loading={loading}>
        <div>
          <p>{products.name}</p>
          <p>${products.price}</p>
          <p>{products.description}</p>
          <p>{products.sku}</p>
          <Button>Comprar</Button>
          <Button>Agregar <BsCart></BsCart></Button>
          <input type="number" min="1" placeholder="1" style={styles.cantselector}/>
        </div>
      </Loading>
    );
  
}

export default Detalle;