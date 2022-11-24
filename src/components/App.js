import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol>
               <li key = {'gm'}>abc</li>
               <li key = {'gm1'}>bcd</li>
               <li key = {'gm2'}>efg</li>
               <li key = {'gm3'}>hij</li>
               </ol>
            </div>
        )
    }
}


export default App;
