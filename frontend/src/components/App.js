import React, {Component} from 'react';
import {CreateMeeting} from './CreateMeeting.js'
import { Container, Row, Col } from 'react-bootstrap';
import {Header} from './Header.js';
import {Footer} from './Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

    render() {
        return (

            <Container>
      <Header />
            <CreateMeeting />
      
            </Container>
        );
    }
}

export default App;
