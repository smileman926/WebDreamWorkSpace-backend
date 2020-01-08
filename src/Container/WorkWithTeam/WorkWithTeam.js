import React from "react";
import './WorkWithTeam.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

   bg: {
    backgroundColor: '#1976d2',
    color: 'white'
  }
}));


export default function WorkWithTeam(props) {
	const { Title, Text, imgUrl } = props.data;
	const classes = useStyles();
	return (

		<div className={classes.root} id={props.id}>
			<div className="workwithteam">
			<Grid container spacing={3}>
		        <Grid item xs={12} sm={5} style={{display:'inline',verticalAlign:'middle'}}>
		          	<h1 className="title">{Title}</h1>
					<p className="subtitle">{Text}</p>
		        	<Button variant="contained" color="primary">Sign up! It's free.</Button>
		        </Grid>
		        <Grid item xs={12} sm={7}>
	        		<img className="image" src={imgUrl} alt="WorkWithTeam" />
		        </Grid>
	        </Grid>
	        </div>


		</div>
		)
}