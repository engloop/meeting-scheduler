import React, {Component} from 'react';
import {CreateMeeting} from './CreateMeeting.js'
import { Container } from 'react-bootstrap';
import {Header} from './Header.js';
import {Footer} from './Footer.js';


class App extends Component {
    render() {
        return (
            <Container>
                <h1>Meeting Scheduler</h1>
                <CreateMeeting />
            </Container>
            <div>
            <Header />
            <Footer />
            </div>
        );
    }
}

export default App;
