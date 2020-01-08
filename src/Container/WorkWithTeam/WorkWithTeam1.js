import React from "react";
import './WorkWithTeam1.css';

export default class WorkTeamWith1 extends React.Component {
	render() {
		return (
			<section id="collaborate"> 
	<div className="container py-5 pb-md-0"> 
	<div className="row align-items-center"> 
	<div className="col-md-7 order-md-12"> 
	<div className="board"> 
	<div className="header"> 
		<div className="title"><h3>Team Tasks</h3></div> 
	</div> 
	<div className="lists"> 
	<div className="list"> 
	<div className="list-content"> 
	<h5>Doing</h5> 
		<div className="card"> 
			<div className="card-content"> 
				<div className="labels">
					<div className="label label-blue"></div>
				</div> Client meeting
				<div className="description"> 
					<svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg">
						<path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fillRule="evenodd" opacity=".3">
						</path>
					</svg> 
				</div> 
				<div className="card-users">
				    <div className="user user-1"></div> 
				</div> 
			</div> 
		</div> 
	    <div className="card"> 
	    	<div className="card-content"> 
	    		<div className="labels"> 
	    			<div className="label label-red"></div>
	    		</div> Plan webinar 
	    		<div className="description"> 
	    			<svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> 
		    			<path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fillRule="evenodd" opacity=".3">
		    			</path>
	    			</svg> 
	    		</div>
	    		<div className="card-users">
				    <div className="user user-2"></div> 
				    <div className="user user-1"></div> 
				</div>
	      	</div> 
	    </div> 
	    <div className="card"> 
	    	<div className="card-content"> 
	    		<div className="labels"> 
	      			<div className="label label-purple"></div> 
	      		</div> Email newsletter 
	      		<div className="description"> 
	      		<svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> 
		      		<path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fillRule="evenodd" opacity=".3">
		      		</path> 
		      	</svg>
	       		</div> 
		       	<div className="card-users"> 
				    <div className="user user-3"></div> 
				</div> 
			</div> 
		</div> 
		<div className="add-card"> Add a card… </div> 
	</div> 
	</div> 
		<div className="list"> 
			<div className="list-content"> <h5>Done</h5> 
			<div className="card"> 
			<div className="card-content"> 
				<div className="labels"> 
		        	<div className="label label-red"></div> 
		        </div> Publish podcast 
	        <div className="description"> 
	        	<svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> 
	        	<path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fillRule="evenodd" opacity=".3">
	        	</path> </svg>
	        </div> <div className="card-users"> 
	        <div className="user user-3"></div>
	         <div className="user user-2"></div> 
	         </div> </div> </div> <div className="card"> 
	         <div className="card-content"> <div className="labels">
	          <div className="label label-purple"></div> </div> Launch website 
	          <div className="description"> <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="m1 0h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h14c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-14c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 4h8c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1h-8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z" fill="#30364c" fillRule="evenodd" opacity=".3">
	          </path> 
	          </svg>
	           </div> <div className="card-users"> 
	           <div className="user user-2"></div>
	            </div> </div> </div>
	             <div className="add-card"> Add a card… </div> 
	             </div> </div> </div> </div> </div>
	              <div className="col-md-5 order-md-1 text-center text-md-left">
	               <h3>Work with any team</h3> 
	               <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
	                <p><a href="signup.html" className="btn btn-secondary px-3">Start doing →</a></p> </div> </div> </div> 
</section>


			)
	}
}