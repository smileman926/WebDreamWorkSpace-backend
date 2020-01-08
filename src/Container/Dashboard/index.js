import React from "react";
import {connect} from "react-redux";
import {logoutUser} from "../../store/action/actions";

class Dashboard extends React.Component {
	handleClick = e=>{
		e.preventDefault();
		this.props.logoutUser();
	}
	render() {
			const {user} = this.props.auth;

		return(<div>
			<h1>This is Dashboard Page.</h1>
			<p>Hello <strong>{user.name}!</strong> Welcome to Dashboard.</p>
			<input type="button" className="btn btn-primary" value="Log Out" onClick={this.handleClick}/>
			</div>
			)
	}
}

const mapStateToProps = state=> ({
	auth: state.auth
})
const mapDispatchToProps = dispatch=>({
	logoutUser: ()=>dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);