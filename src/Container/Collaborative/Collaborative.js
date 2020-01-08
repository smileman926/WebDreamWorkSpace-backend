import React from "react";
import './Collaborative.scss';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
  },

   bg: {
    backgroundColor: '#1976d2',
    color: 'white'
  }
}));


export default function Collaborative(props) {
	const { Title, Text, imgUrl } = props.data;
	const classes = useStyles();
	return (

		<div className={classes.bg} id={props.id}>
			<div className="collaborative">
			<Grid container spacing={3}>
		        <Grid item xs={12} sm={5} style={{textAlign:'left'}}>
		          	<h1 className="title text-center">{Title}</h1>
					<p className="subtitle text-center">{Text}</p>
		        </Grid>
		        <Grid item xs={12} sm={7}>
	        		<img className="image" src={imgUrl} alt="collaborative" />
		        </Grid>
		        <Grid container item sm={4}>
		        <input type="text" className="signupEmail input-lg" placeholder="Email" />
		        </Grid>
		        <Grid container item xs={8} sm={4} className="text-center">
		        	<input type="button" className="btn btn-success btn-lg signupBtn" value="Sign Up!&nbsp;It's free" />
	        	</Grid>
	        </Grid>
	        
	        </div>

		</div>
		)
}