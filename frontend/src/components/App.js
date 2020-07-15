import React, {Component} from 'react';
import {CreateMeeting} from './CreateMeeting.js'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Meeting Scheduler</h1>
                <CreateMeeting />
            </div>
        );
    }
}

export default App;
