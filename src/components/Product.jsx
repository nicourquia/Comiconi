import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import { Col, Button } from "react-bootstrap"

// Styles
const styles = {
    cardContainer:{
        width: "15rem"
    },
    cardImg:{
        width: "8rem"
    }
};

function Product(props){
    const {datos} = props


    return(
        <Col>
            <Card style={styles.cardContainer}>
                <Card.Body>
                    <Card.Img variant="top" style={styles.cardImg} src={datos.thumbnail}/>
                    <Card.Title>{datos.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">$ {datos.price}</Card.Subtitle>
                    <Card.Text>Descripción: {datos.description}</Card.Text>
                    <Card.Text>SKU: {datos.sku}</Card.Text>
                    <Button variant="primary" className="text-white" as={Link} to={'/item/'+datos.id}>Ver Detalle</Button>
                    <Button variant="primary" className="text-white" as={Link} to={'/productos/modificar/'+datos.id}>Modificar</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Product;