import React from "react";

class Panel extends React.Component {
  // the <button> comes with an onClick event that I have set to the requestProp functionality
  render() {
    return (
      <div id="panel">
        <h1> This is the panel</h1>

        <div id="request">
          {/* <h2> Make a request </h2> */}
          <button onClick={this.props.requestData}> API request </button>
        </div>
        <div id="response">
          <h2> Get the response</h2>
          <div id="data">
          {/* data goes here */}
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
