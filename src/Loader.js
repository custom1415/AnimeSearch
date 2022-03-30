import React from "react";
// import Shuriken from "../../Assets/star.png";
import './Loader.css'
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Loading">
        <img
          src="https://raw.githubusercontent.com/custom1415/Anime/master/src/Monsters/Assets/star.png"
          alt=""
          className="Star"
        />
      </div>
    );
  }
}

export default Loading;
