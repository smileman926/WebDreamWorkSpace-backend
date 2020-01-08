import React from "react";

import TrelloWay from "./TrelloWay";
// style={{'display':'grid', 'grid-template-columns': '1fr 1fr 1fr', 'grid-gap': 50}}



export default function TrelloWays(props) {
	const { Title, Text, Contents, } = props.data;


	return (
		<section id="features"> 
			<div className="container text-center py-6"> 
				<div className="row"> 
					<div className="col-md-6 offset-md-3"> 
						<h3>{Title}</h3> 
						<p>{Text}</p> 
					</div> 
				</div> 
				<div className="row"> 
					{Contents.map((item, idx) => <TrelloWay key={idx} data={item} />)}
				</div> 
			</div> 
		</section>
		)

}

	// return (
	// 	<div className="TrelloWays" id="TrelloWays">
	// 		<div className="head">
	// 			<h1>{Title}</h1>
	// 			<p>{Text}</p>
	// 		</div>
	// 		<div className={classes.root}>
	// 			{Contents.map((item, idx) => <TrelloWay key={idx} data={item} />)}
	// 		</div>
	// 	</div>
	// 	)