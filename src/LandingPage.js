import React from 'react';

import LoadingBar from './Components/WithSpinner/with-spinner';
import Navbar from "./Components/Navbar/Navbar";
import Collaborative from "./Container/Collaborative/Collaborative";
//import WorkWithTeam from "./Container/WorkWithTeam/WorkWithTeam";
import WorkWithTeam1 from "./Container/WorkWithTeam/WorkWithTeam1";
import Information from "./Container/Information/Information";
// import WorkFlow from "./Container/Workflow/WorkFlow";
import TrelloWays from "./Container/TrelloWays/TrelloWays";
import WorkSmarter from "./Container/WorkSmarter/WorkSmarter";
import PlaningToday from "./Container/PlaningToday/PlaningToday";
import Footer from "./Container/Footer/Footer";
import SeeCarousel from "./Container/SeeCarousel/SeeCarousel";
import "./App.css";
import {connect} from "react-redux";
import {getPageData} from './store/action/actions';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      opacity: 0
    }
  }



  componentDidMount() {

    this.props.getPageDatas();
    document.addEventListener('scroll', ()=>{
      const h = window.scrollY;
      if (h>80) {
        this.setState({
          opacity:1
        })
      }
        else{
          this.setState({
            opacity: 0
          })
        }
    });
  }
  render() {
    const { loading, pageDatas } = this.props;
    
    if (loading) {

      return <LoadingBar />
    }
    return (
      <div className="App">
        <Navbar opacity={this.state.opacity}/>
        <div className="app-content">
        <Collaborative data={pageDatas.Collaborative} id="Collaborative" />
        
        <WorkWithTeam1 id="WorkWithTeam" />
        <Information data={pageDatas.Information} id="Information" />
        <SeeCarousel />
        <TrelloWays data={pageDatas.TrelloWays} id="TrelloWays" />
        <WorkSmarter />
        <PlaningToday data={pageDatas.PlaningToday} id="PlaningToday" />
        <Footer data={pageDatas.FooterLists} id="Footer" />
        </div>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    pageDatas: state.Datas.pageDatas,
    loading: state.Datas.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPageDatas: ()=> dispatch(getPageData())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
