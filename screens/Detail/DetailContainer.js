import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("dorm")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: { dorm }
        }
      }
    } = props;

    this.state = {
      dorm
    };
  }

  render() {
    const { dorm } = this.state;
    return <DetailPresenter dorm={dorm} />;
  }
}

export default DetailContainer;
