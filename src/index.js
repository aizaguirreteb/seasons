import React from 'react';
import ReactDOM from 'react-dom';

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

    constructor(props) {
        super(props);

        //This is our state object!
        this.state = { lat: null, errorMessage: '' }
        
    }

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

    render () {

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if( this.state.lat && !this.state.errorMessage ){
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            )
        }

        return (
            <div>Loading...</div>
        )
        
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));