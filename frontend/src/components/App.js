import React, {Component} from 'react';
import {CreateMeeting} from './CreateMeeting.js'
import {AfterCreate} from './AfterCreate.js'
import {Coordinate} from './Coordinate.js'
import { Container, Row, Col } from 'react-bootstrap';
import {Header} from './Header.js';
import {Footer} from './Footer.js';
import {withRouter, BrowserRouter, Switch, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

    render() {
        return (
    		<Container>
      			<Header />
      			<Switch>
            		<Route path='/' component={CreateMeeting} exact />
            		<Route path='/meeting-success/:meetingId' component={AfterCreate} />
            		<Route path="/meeting/:meetingId" component={Coordinate} />
      			</Switch>
            <Footer />
        </Container>
            
        );
    }
}

export default App;
