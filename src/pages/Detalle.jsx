import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getByIdProductos} from "../services/ProductServices"
import { Button } from 'react-bootstrap'
import Loading from "../components/Loading"

function Detalle() {
  const [products,setProducts] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
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
        </div>
      </Loading>
    );
  
}

export default Detalle;