import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        productId: 0
      };
    }; 
    
    componentDidMount() {
      window.addEventListener('updateProduct', (event) => {
        this.setState({ productId: event.detail });
      }, false);
    }

    render() {
      //console.log("is it in window?", window.SimilarOptions)
      return (
        <div>
          {/* <p style={headerStyle}>Home Repot.  Product ID is {this.state.productId}</p> */}
          {/* <div style={test}> */}
            <p style={headerStyle}>The Home Repot</p>
          {/* </div> */}
          <div style={photoOverviewDivStyle}>
            <div id="photos" ></div>
            <div id="product-overview"></div>
          </div>
          <div id="similar-options"></div>
          <div id="reviews"></div>
        </div>
      );
    };
};

// const test = {
//   position: "fixed",
//   top: 0,
//   color: "white",
//   width: "100%",
//   backgroundColor: "#f96302",
//   overflow: "hidden"
//   //marginBottom: 50
// }

const headerStyle = {
  fontFamily: "helvetica-neue-light, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontSize: "2em",
  fontWeight: 400,
  borderBottom: "4px solid #f96302",
  marginBottom: 10
};

const photoOverviewDivStyle = {
  display: "grid",
  gridTemplateColumns: "60% 40%",
  width: "95",
  marginLeft: "2%",
  marginRight: "2%",
  heigth: "610"
};

const overviewStyle = {
  background: "grey"
};

ReactDOM.render(<App />, document.getElementById('home-page')); 