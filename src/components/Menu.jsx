import {Link} from "react-router-dom"
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { BsCart } from "react-icons/bs"

function Menu({statusLogin}){
    const cat = [1, 2, 3]
    const styles ={
        cart:{
            color: "#ffffff",
        },
        title:{
            color: "#ffffff",
            padding: "0",
        },
    }
    const logout = ()=>{
        console.log("logout")
    }

    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Nav.Link style={styles.title} as={Link} to="/">Comiconi</Nav.Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    {
                        !statusLogin &&
                        <>
                            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        </>
                    }
                    {
                        statusLogin &&
                        <>
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Gestion de Productos">
                                <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link onClick={logout}>Salir</Nav.Link>
                        </>
                    }
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to={`/categoria/${cat[0]}`}>Spider-Man</Nav.Link>
                    <Nav.Link as={Link} to={`/categoria/${cat[1]}`}>Avengers</Nav.Link>
                    <Nav.Link as={Link} to={`/categoria/${cat[2]}`}>Iron Man</Nav.Link>
                </Nav>
                <Nav>
                    <BsCart style={styles.cart}>
                    </BsCart>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu;