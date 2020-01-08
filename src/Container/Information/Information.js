import React from "react";
import './Information.css';

export default function Information(props) {
	const { Title, Text, WorkFlow } = props.data;

	return (

		<section id="teams"> 
		<div className="container py-5 pt-md-0"> 
			<div className="row align-items-center"> 
				<div className="col-md-5"> 
					<div className="clipping-mask"> 
						<div className="phone"> 
							<div className="forehead"> 
								<div className="earpiece"></div> 
							</div> 
							<div className="buttons"> 
								<div className="silent"></div> 
									<div className="volume"></div> 
										<div className="lock"></div> 
									</div> 
									<div className="screen"> 
										<div className="board"> 
											<div className="header"> 
												<div className="title"> 
													<h3>Summer Vacation</h3> 
												</div> 
											</div> 
											<div className="lists"> 
												<div className="list"> 
													<div className="list-content"> 
														<h5>To Do</h5> 
														<div className="card"> 
															<div className="card-content"> Swimming </div> 
														</div> 
														<div className="card"> 
															<div className="image surfing-lessons"></div> 
															<div className="card-content"> Surfing Lessons </div> 
														</div> 
														<div className="card"> 
															<div className="card-content"> Whale Watching </div> 
														</div> 
														<div className="card"> 
															<div className="card-content"> Snorkeling </div> 
														</div> 
														<div className="add-card"> 
															<div className="card-content"> Add a card… </div> 
														</div> 
													</div> 
												</div> 
												<div className="list"> 
													<div className="list-content"> 
														<h5>To Eat</h5> 
															<div className="card"> 
																<div className="image tiki-drinks"></div> 
																<div className="card-content"> Tiki Drinks </div> 
															</div> 
															<div className="card"> 
																<div className="card-content"> Taro Ice Cream </div> 
															</div> 
															<div className="card"> 
																<div className="card-content"> Fresh Seafood </div> 
															</div> 
															<div className="card"> 
																<div className="card-content"> Ahi Poke </div> 
															</div> 
															<div className="add-card"> Add a card… </div> 
													</div> 
												</div> 
											</div> 
										</div> 
									</div> 
									<div className="chin"> 
										<div className="button"></div> 
									</div> 
								</div> 
							</div> 
						</div> 
						<div className="col-md-7 text-center text-md-left"> 
							<h3 className="mt-3 mt-md-0">{Title}</h3> 
							<p className="m-0">{Text}</p> 
						</div> 
					</div> 
					<div className="row pt-5 pt-md-6"> 
						<div className="col-md-5 order-md-last"> 
							<img className="img-fluid mb-3" src={WorkFlow.imgUrl} width="754" height="578" alt="WorkFlow" /> 
						</div> 
						<div className="col-md-7"> 
							<h4> {WorkFlow.Title} </h4> 
							<div className="line my-4"></div> 
							<p> {WorkFlow.Text} </p>
							<ul> 
							{WorkFlow.Lists.map((item,idx)=>(<li key={idx}>{item}</li>))}
								
							</ul> 
							<p></p> 
						</div> 
					</div> 
				</div>
			</section>
		)
}