import React from "react";
import './SignIn.css';
import {connect} from 'react-redux';
import {loginUser} from '../../store/action/actions';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
		
	}

	componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
    componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    
  }

	onChange = e=> {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	handleSubmit = e=> {
		e.preventDefault();
		const userData={
			email: this.state.email,
			password: this.state.password
		}
		
		this.props.loginUser(userData);
	}
	
	render() {
		const lists = [
			"Tour",
			"Pricing",
			"Apps",
			"Jobs",
			"Blog",
			"Developers",
			"About",
			"Help",
			"Cookie Settings"
			];
		const list = lists.map((item,i) =>
  		<li key={i}><a href="#">{item}</a></li>
			);
		return (
			<div>
			<section id="signin">
				<img alt="Trello" className="trello-main-logo" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
				
				<div className="card">
					<div className="card-body">
						<h4 className="card-title">Sign up to Trello</h4>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
							  <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.onChange}/>
							</div>
							<div className="form-group">
							  <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.onChange}/>
							</div>
							
							<input type="submit" className="btn btn-success btn-block" value="Login"/>
							<p className="text-center">OR</p>
							<button type="button" className="btn btn-outline-dark btn-block">Continue With Google</button>
						</form>
						<hr />
						<p><a href="#">Can't log in?</a>&nbsp;<a href="/signup">Sign up for an account</a></p>

					</div>

				</div>
				<p> <a href="#" className="card-link">Terms of Service</a>  <a href="#" className="card-link">Privacy Policy.</a> </p>

				<div className="footer align-items-center my-4">
			<div id="language-picker-container">
				<select name="language-picker"
				 		 id="language-picker"
				 		 data-analytics-event="clickedFooterLanguageSelectMenu"> 
				 		 <option value="choose-one" id="choose" disabled={true}>Select your language…</option>  
				 		 <option value="cs" data-url="https://trello.com/cs" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Čeština">Čeština</option>  
				 		 <option value="de" data-url="https://trello.com/de" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Deutsch">Deutsch</option>  
				 		 <option value="en" data-url="https://trello.com/en" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English">English</option>  
				 		 <option value="en-AU" data-url="https://trello.com/en-AU" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (AU)">English (AU)</option>  
				 		 <option value="en-GB" data-url="https://trello.com/en-GB" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (UK)">English (UK)</option>  
				 		 <option value="en-US" data-url="https://trello.com/en-US" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (US)">English (US)</option>  
				 		 <option value="es" data-url="https://trello.com/es" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Español">Español</option>  
				 		 <option value="fr" data-url="https://trello.com/fr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Français">Français</option>  
				 		 <option value="it" data-url="https://trello.com/it" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Italiano">Italiano</option>  
				 		 <option value="hu" data-url="https://trello.com/hu" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Magyar">Magyar</option>  
				 		 <option value="nl" data-url="https://trello.com/nl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Nederlands">Nederlands</option>  
				 		 <option value="nb" data-url="https://trello.com/nb" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Norsk (bokmål)">Norsk (bokmål)</option>  
				 		 <option value="pl" data-url="https://trello.com/pl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Polski">Polski</option>  
				 		 <option value="pt-BR" data-url="https://trello.com/pt-BR" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Português (Brasil)">Português (Brasil)</option>  
				 		 <option value="fi" data-url="https://trello.com/fi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Suomi">Suomi</option>  
				 		 <option value="sv" data-url="https://trello.com/sv" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Svenska">Svenska</option>  
				 		 <option value="vi" data-url="https://trello.com/vi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Tiếng Việt">Tiếng Việt</option>  
				 		 <option value="tr" data-url="https://trello.com/tr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Türkçe">Türkçe</option> 
				 		 <option value="ru" data-url="https://trello.com/ru" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Русский">Русский</option>  
				 		 <option value="uk" data-url="https://trello.com/uk" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Українська">Українська</option>  
				 		 <option value="th" data-url="https://trello.com/th" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="ภาษาไทย">ภาษาไทย</option>  
				 		 <option value="zh-Hans" data-url="https://trello.com/zh-Hans" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="中文 (简体)">中文 (简体)</option>  
				 		 <option value="zh-Hant" data-url="https://trello.com/zh-Hant" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="中文 (繁體)">中文 (繁體)</option>  
				 		 <option value="ja" data-url="https://trello.com/ja" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="日本語">日本語</option>  
				</select>
			</div>
			 	<div> <span className="dropdown-icon"></span> </div> 
			
			
			

			<p className="global-footer-detail"> 
			<img className="atlassian-logo-small white" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/e4e8fa01ba058bce8e9f2bb7459516f9/atlassian-logo-white-small.svg" width="150" alt="logo" /> 
			<img className="atlassian-logo-small gray" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" width="150" alt="logo" />
			&nbsp;&copy; Copyright 2019. All rights reserved. </p>

		</div>
		 
			</section>
			<ul className="menulists_sign">
			 {list}
			</ul>
			</div>
			)
	}
}

const mapStateToProps = state=>({
	auth: state.auth
});
const mapDispatchToProps = dispatch=>{
	return {
		loginUser: (a)=>dispatch(loginUser(a))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);