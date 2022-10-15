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

function CatInfo(props){
    const {datos} = props


    return(
        <Col>
            <Card style={styles.cardContainer}>
                <Card.Body>
                    <Card.Title>{datos.nombre}</Card.Title>
                    <Card.Subtitle>{datos.id}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CatInfo;