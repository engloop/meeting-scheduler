import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Navbar} from 'react-bootstrap'



export const Header = () =>
	<header className="with-margin">
		<Navbar position="static" bg="primary" variant="dark">
    	<Navbar.Brand href="#home">Meeting Scheduler</Navbar.Brand>

    	
	  
		</Navbar>
	</header>;


