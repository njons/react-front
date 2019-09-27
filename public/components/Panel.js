import React from "react";

class Panel extends React.Component {
  render() {
    return (
      <div id="panel">
        <h1> This is the panel</h1>

        <div id="request">
          {/* <h2> Make a request </h2> */}
          <button> Make a request </button>
        </div>
        <div id="response">
          <h2> Get the response</h2>
          <div id="data"></div>
        </div>
      </div>
    );
  }
}

export default Panel;
