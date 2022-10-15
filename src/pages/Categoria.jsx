import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProductos, getAllCategories } from "../services/ProductServices";
import Loading from "../components/Loading";
import Producto from "../components/Product";
import CatInfo from "../components/CatInfo";
import { Row } from "react-bootstrap";

function Categoria() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const categid = [1, 2, 3]
  var URLactual = window.location.pathname;
    console.log(URLactual);
  useEffect(() => {
    const request = async () => {
      try {
        const docs = await getAllCategories();
        if (docs) {
          setCategorias(docs);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
      try {
        const docs = await getAllProductos();
        if (docs) {
          setProductos(docs);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);
  return (
    <Loading loading={loading}>
      <Row xs={"auto"} md={"auto"}>
        {productos.filter((producto) => {
            if(URLactual === "/categoria/1"){
                return producto.categoria !== "spiderman"
            }
            else if(URLactual === "/categoria/2"){
                return producto.categoria == "avengers"
            }
            else if(URLactual === "/categoria/3"){
                return producto.categoria == "ironman"
            }
        }
        ).map((producto) => (
          <Producto
            key={producto.id}
            datos={{ ...producto.data(), id: producto.id }}
          />
        ))}
      </Row>
    </Loading>
  );
}

export default Categoria;
