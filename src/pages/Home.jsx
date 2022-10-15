import React,{useState,useEffect} from 'react';
import { getAllProductos } from '../services/ProductServices';
import Loading from '../components/Loading'
import Producto from '../components/Product';
import { Row } from 'react-bootstrap'

function Home() {
  const [productos,setProductos] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(
    ()=>{

      const request = async ()=>{
        try{
          const docs = await getAllProductos();
          if(docs){
            setProductos(docs)
            setLoading(false)
          }
        }catch(e){
          console.log(e)
        }
      }
      request()
    },
    []
  )
    return (
      <Loading loading={loading}>
        <Row xs={"auto"} md={"auto"}>
          {productos.map(producto=><Producto key={producto.id} datos={{...producto.data(), id:producto.id}}/>)}
        </Row>
      </Loading>
    );
  
}

export default Home;
