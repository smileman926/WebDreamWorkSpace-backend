import React from "react"
import './WorkSmarter.css';

export default function WorkSmarter() {
	return(
		<section id="work-smarter"> 
			<div className="container"> 
				<div className="inner px-4 py-5 text-center text-white"> 
					<h3>Work smarter with Trello</h3> 
					<p>Companies of all shapes and sizes use Trello.</p> 
					<div className="logo-container mb-4"> 
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/83b3c2b3542d1ce997306dd2c76a898d/logo-kickstarter.svg" alt="Kickstarter" width="207" height="24" /> 
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/99b35981e7c571708532ba39f0764aeb/logo-national-geographic.svg" alt="National Geographic" width="166" height="46" /> 
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/4838c7256b43105d3abe0631ac1bb72c/logo-google.svg" alt="Google" width="143" height="46" /> 
						<img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/759e9aaacc706fd1f2d5f81b1a76b768/logo-fender.svg" alt="Fender" width="153" height="55" /> 
					</div> 
					<p><a href="business-class.html" className="btn btn-light px-3">Find out how →</a></p> 
				</div> 
			</div> 
		</section>
		)
}