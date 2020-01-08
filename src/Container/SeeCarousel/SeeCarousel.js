import React from 'react';
import './SeeCarousel.css';

class SeeCarousel extends React.Component{
	constructor(props){
		super(props);
		this.state={
			step: 0,
			robort: [
				{x: '40px',y: '260px',deg: '20deg'},
				{x: '40px',y: '670px',deg: '20deg'},
				{x: '160px',y: '670px',deg: '0deg'},
				{x: '70px',y: '670px',deg: '0deg'},
				{x: '-20px',y: '570px',deg: '0deg'}
			],
			text: [
				 'Create a board for any project, give it a name, and invite your team.' ,
				 ' Add lists to create steps in a workflow that is right for you. ',
				 ' Create cards for tasks to complete or information you want to organize. ',
				 ' Click on a card to add details, due dates, checklists, comments, and more. ',
				 ' Move them across lists to show progress. Go from "To Do" to "Done" in no time! '
			]
		}



	}

	set0 = ()=> this.setState({step: 0});
	set1 = ()=> this.setState({step: 1});
	set2 = ()=> this.setState({step: 2});
	set3 = ()=> this.setState({step: 3});
	set4 = ()=> this.setState({step: 4});


	
	hadlestepup = () => {
		this.setState({
			step: this.state.step===4?0:this.state.step+1
		})
	}
	hadlestepdown = () => {
		this.setState({
			step: this.state.step===0?4:this.state.step-1
		})
	}
	render(){
		return (
			<div id="carousel" style={{"position":"relative"}}>
			<div className='howworks_div my-4' onClick={this.hadlestepup}>
				<img src={`images/carousel${this.state.step}.png`} alt='how works' className='howworks_img' />
				
				
				<div className='changetext_div'>
					{this.state.text[this.state.step]}
				</div>
				<div className='robort_div' style={{"top":this.state.robort[this.state.step].x, "left":this.state.robort[this.state.step].y, "transform": "rotate("+this.state.robort[this.state.step].deg+")", 'transition': '.5s'}}></div>
			</div>
			<span className="fas fa-angle-left align-items-center" onClick={this.hadlestepdown} />
			<span className="fas fa-angle-right" onClick={this.hadlestepup} />
			
			<div className='change_div_div'>
				<div className="change_div" onClick={this.set0} style={this.state.step===0?{"transform":"scale(1.5)", "backgroundColor": "#00C2E0"}:{}}></div>
				<div className="change_div" onClick={this.set1} style={this.state.step===1?{"transform":"scale(1.5)", "backgroundColor": "#00C2E0"}:{}}></div>
				<div className="change_div" onClick={this.set2} style={this.state.step===2?{"transform":"scale(1.5)", "backgroundColor": "#00C2E0"}:{}}></div>
				<div className="change_div" onClick={this.set3} style={this.state.step===3?{"transform":"scale(1.5)", "backgroundColor": "#00C2E0"}:{}}></div>
				<div className="change_div" onClick={this.set4} style={this.state.step===4?{"transform":"scale(1.5)", "backgroundColor": "#00C2E0"}:{}}></div>
			</div>
			</div>
		);
	}
}

export default SeeCarousel;



