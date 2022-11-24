import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol>
               <li key = {'relativeListItem1'}>abc</li>
               <li key = {'relativeListItem2'}>bcd</li>
               <li key = {'relativeListItem3'}>efg</li>
               <li key = {'relativeListItem4'}>hij</li>
               </ol>
            </div>
        )
    }
}


export default App;
