import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoadingBox = styled.p`
  font-size: 65px;
  color: #333;
  font-weight: 100;
  text-align: center;
`;

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }
  componentDidMount() {
    var stopper = this.props.text + "...";
    this.interval = window.setInterval(
      function() {
        if (this.state.text === stopper) {
          this.setState(function() {
            return {
              text: this.props.text
            };
          });
        } else {
          this.setState(function(prevState) {
            return {
              text: prevState.text + "."
            };
          });
        }
      }.bind(this),
      this.props.speed
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return <LoadingBox>{this.state.text}</LoadingBox>;
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};

export default Loading;
