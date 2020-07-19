// index.js
// Source: Kirupa Chinnathambi, Learning React, p. 191
//

import React from "react";
import ReactDOM from "react-dom";

// Earlier, deprecated, version from the book
//

// var HelloWorld = React.createClass({
//   render: function()
//     return (
//       <p>Hello, {this.props.greetTarget}!</p>
//     );  //return
//   } // render
// }); //HelloWorld


//  Modified version to work with later versions of React
//

class HelloWorld extends Component {
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );  //return
  } // render
}; //HelloWorld


ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicholas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
  </div>,
  document.querySelector("#container")
);  /ReactDOM.render
