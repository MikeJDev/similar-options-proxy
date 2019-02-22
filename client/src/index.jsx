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
          <h1>The Home Repot.  Product ID is {this.state.productId}</h1>
          <div style={photoOverviewDivStyle}>
            <div id="photos" ></div>
            <div id="overview" style={overviewStyle}></div>
          </div>
          <div id="similar-options"></div>
          <div id="reviews"></div>
        </div>
      );
    };
};

const photoOverviewDivStyle = {
  display: "grid",
  gridTemplateColumns: "60% 40%",
  width: "95",
  marginLeft: "2%",
  marginRight: "2%",
  heigth: "610"
}

const overviewStyle = {
  background: "grey"
}

ReactDOM.render(<App />, document.getElementById('home-page')); 