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
        this.state = { lat: null }
    }

    render () {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        )
        return <div>Latitude: </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));