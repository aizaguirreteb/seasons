import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {

//     /**
//      * Geolocation API
//      */
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     )


//     return <div>Latitude: </div>;
// };

class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     //This is our state object!
    //     this.state = { lat: null, errorMessage: '' }
        
    // }

    // Different way of initializing component state
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        console.log('My component was rendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })            
        )
    }

    componentDidUpdate() {
        console.log('My component updated itself')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if( this.state.lat && !this.state.errorMessage ){
            return <SeasonDisplay lat={this.state.lat} />    
        }

        return <Spinner message="Please accept location request"/>
    }

    render () {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));