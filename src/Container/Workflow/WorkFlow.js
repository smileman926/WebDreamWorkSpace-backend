import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

   bg: {
    backgroundColor: '#1976d2',
    color: 'white'
  }
}));


export default function WorkFlow(props) {
	const { Title, Text, imgUrl, Lists } = props.data;
	const classes = useStyles();
	return (

		<div className={classes.root} id={props.id}>
			<div className="information">
			<Grid container spacing={3}>
				<Grid item xs={12} sm={5}>
					<h1 className="title">{Title}</h1>
					<p className="subtitle">{Text}</p>
					<ul>
                    {Lists.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
		        </Grid>
		        <Grid item xs={12} sm={6}>
  		        	<img className="image" src={imgUrl} alt="WorkFlow" />
		        </Grid>
	        </Grid>
	        </div>
		</div>
		)
}