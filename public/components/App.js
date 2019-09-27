import React from "react";
import Header from "./Header";
import Panel from "./Panel";
import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Panel />
        <Footer />
      </div>
    );
  }
}

export default App;
