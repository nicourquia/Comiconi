import React,{ useState } from 'react';
import Home from '../pages/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom"
import Menu from '../components/Menu'
import Detalle from '../pages/Detalle'
import Footer from '../components/Footer'
import Registro from '../pages/Registro'
import Login from '../pages/Login'
import ProductsAlta from '../pages/ABMProducts/ProductsAlta'
import ProductsUpdate from '../pages/ABMProducts/ProductsUpdate'
import Categoria from '../pages/Categoria';
import {Navbar, Container} from 'react-bootstrap'
import Carrito from '../pages/Carrito'

function Public(){
    const [login, setLogin] = useState(false)
    return(
        <Router>
            <Menu statusLogin={login}/>
            <Navbar>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path='/login' element={<Login setLoginUser={setLogin} />}/>
                    <Route path="/productos/alta" element={<ProductsAlta/>}/>
                    <Route path="/productos/modificar/:id" element={<ProductsUpdate/>}/>
                    <Route path="/item/:id" element={<Detalle />}/>
                    <Route path='/registro' element={<Registro/>}/>
                    <Route path='/categoria/:categoriaId' element={<Categoria/>}/>
                    <Route path='/carrito/' element={<Carrito/>}/>
                </Routes>
            </Container> 
            </Navbar>
            <Footer/>
        </Router>
    )
}

export default Public;