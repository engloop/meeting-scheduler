import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const style = {
        textAlign: 'center',
        color: '#3f51b5',
        position: 'absolute',
        paddingTop: '15px',
        paddingBottom: '10px',
        width: '80%',
        bottom: 0,
    };

export const Footer = () =>
<Container>
	<footer style = {style}>
		© Engloop 2020
	</footer>
</Container>		

;