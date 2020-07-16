import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


export const Header = () =>
	<header>
		<AppBar position="static">
		<Toolbar>
			<Typography variant="h4" >
      			Meeting Scheduler
    		</Typography>
    	</Toolbar>
	  
		</AppBar>
	</header>;


