import React from "react";
import "./TrelloWay.css";


export default function TrelloWays(props) {
	const {imgUrl, header, caption, btnText, btnUrl} = props.data;
// style={{'display':'grid', 'grid-template-columns': '1fr 1fr 1fr', 'grid-gap': 50}}
	const ele = (str) => {
		if (str) {
					return (<p><a className="btn btn-secondary btn-wrap px-3" href="teams.html">{btnText}</a></p>)
				}
			else {
					return (
						<p className="app-store"> 
							<a href="https://itunes.apple.com/app/trello-organize-anything/id461504587">
								<img src={btnUrl[0]} className="img-fluid" alt="Available on the App Store" />
							</a>&nbsp;&nbsp;
							<a href="https://play.google.com/store/apps/details?id=com.trello">
								<img src={btnUrl[1]} className="img-fluid" alt="Android App on Google Play" />
							</a> 
						</p>
						)
				}
	}
	return (
		<div className="col-lg-4"> 
			<div className="img img-collaborate">
				<img src={imgUrl} alt="" width="270" />
			</div> 
			<h5>{header}</h5> 
			<p className="small">{caption}</p>
			{ele(btnText)}
			 
		</div> 
		
		)
}