import React from "react";
import './PlaningToday.css';


export default function PlaningToday(props) {
	const {Title,Text,btnText} = props.data;

	return(
		<section id="get-started" className="d-flex align-items-center my-4"> 
		 	<div className="container text-center py-6"> 
				<div className="row"> 
		 			<div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 px-lg-5 pt-4"> 
		 				<h3>{Title}</h3> 
						<p>{Text}</p> 
		 				<a href="signup.html" className="btn btn-success px-3">{btnText}</a> 
					</div> 
				</div> 
		 	</div> 
		</section>
		)
}
// return (
// <section id="get-started" className="d-flex align-items-center my-4"> 
// 	<div className="container text-center py-6"> 
// 		<div className="row"> 
// 			<div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 px-lg-5 pt-4"> 
// 				<h3>Start Planning Today</h3> 
// 				<p>Sie.</p> 
// 				<a href="signup.html" className="btn btn-success px-3">Get Started – It’s Free!</a> 
// 			</div> 
// 		</div> 
// 	</div> 
// </section>
// )