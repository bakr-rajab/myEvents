import React, {Component} from 'react';
import Header from './component/header_footer/Header';
import './resources/styles.css';

import Featured from "./component/featured/Index";
import VenueNfo from "./component/venueNfo/Index";
import HighLights from "./component/highlights/Index";
import Pricing from "./component/pricing/Index";
import Location from "./component/location/Index";
import Footer from "./component/header_footer/Footer";
import SignUp from "./component/form/SignUp";

class App extends Component {
    state={
        logo:'Student Pls Ple',
        title:'Academic EVENTS',

    }
    render() {

        return (
            <div className="App" style={{height: '1500px', background: 'cornflowerblue', scrollBehavior: 'smooth'}}>
                <Header appName={this.state.logo}
                        appTitle={this.state.title}
                />
                <Featured/>
                <VenueNfo/>
                <hr/>
               <SignUp/>
                <HighLights/>
                <Pricing/>
                <Location/>
                <Footer/>
            </div>
        );
    }
}

export default App;
