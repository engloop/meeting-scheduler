import React from 'react';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const style = {
        textAlign: 'center',
        color: '#3f51b5',
        position: 'absolute',
        paddingTop: '15px',
        paddingBottom: '10px',
        width: '100%',
        bottom: 0
    };

export const Footer = () =>
	<footer>
	<BottomNavigation style = {style}>
		<Typography>© Engloop 2020</Typography>
	</BottomNavigation>
		
	</footer>;