import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getByIdProductos} from "../services/ProductServices"
import { Button } from 'react-bootstrap'
import Loading from "../components/Loading"
import { BsCart } from "react-icons/bs"
import { Link } from "react-router-dom"
import ItemCount from "../components/ItemCount"

function Detalle() {
  const [products,setProducts] = useState({})
  const [loading,setLoading] = useState(true)
  const {id} = useParams();
  const [quantitySelected, setQuantitySelected] = useState(0)
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
          {
            quantitySelected !== 0 ?
            <Link as={Link} to={`/carrito`}>
              <Button>Comprar</Button>
            </Link>
            :
            <div>
              <ItemCount setQuantitySelected={setQuantitySelected}></ItemCount>
            </div>
          }
        </div>
      </Loading>
    );
  
}

export default Detalle;