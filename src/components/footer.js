import React from "react";
import { Container } from "react-bootstrap";


let Footer = () => {
    return (
        <Container fluid style={{backgroundColor: '#212529', color: 'white'}}>
            <Container style={{display: "flex", justifyContent: 'center', padding: '20px'}}>
                <p style={{margin: 'auto'}}> It is my blog</p>
            </Container>

        </Container>
    )
}

export default Footer